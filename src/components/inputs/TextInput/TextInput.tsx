import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";
import CheckIcon from "components/inputs/TextInput/CheckIcon";
import { TConditionCheck } from "components/inputs/TextInput/types/TConditionCheck";

interface Props {
  name?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  conditionList?: string[];
  conditionCheckList?: TConditionCheck[];
  multiline?: boolean;
  height?: string;
  onTextChange?: (value: string, isValid: boolean) => void;
}

const TextInput: React.FC<Props> = ({
  name,
  label,
  value = "",
  placeholder = "",
  conditionList,
  conditionCheckList,
  multiline = false,
  height,
  onTextChange,
}) => {
  const [status, setStatus] = useState(value === "" ? "default" : "success"); // default / success / invalid / focus
  const [enteredValue, setEnteredValue] = useState(value);
  const [isBlurred, setIsBlurred] = useState(false);

  const handleFocus = () => {
    setStatus("focus");
  };

  const handleBlur = () => {
    setIsBlurred(true);
    if (
      conditionCheckList ? conditionCheckList.every((check) => check.condition(enteredValue)) : true
    ) {
      setStatus("success");
      if (onTextChange) {
        onTextChange(enteredValue, true); // Notify parent component that input is valid
      }
    } else {
      setStatus("invalid");
      if (onTextChange) {
        onTextChange(enteredValue, false); // Notify parent component that input is invalid
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setEnteredValue(newValue);

    // 최초 Blur 발생 후, 입력된 텍스트의 조건 확인을 수행하여 isValid 상태 업데이트
    if (isBlurred && newValue != "") {
      if (
        conditionCheckList ? conditionCheckList.every((check) => check.condition(newValue)) : true
      ) {
        setStatus("focus");
      } else {
        setStatus("invalid");
      }
    } else {
      setStatus("focus");
    }
  };

  useEffect(() => {
    // 최초 렌더링 시 또는 enteredValue 변경 시에만 실행
    if (onTextChange) {
      onTextChange(enteredValue, status !== "invalid" && status !== "default");
    }
  }, [enteredValue, status, onTextChange]);

  return (
    <EmotionWrapper height={height}>
      {label && <span className="label">{label}</span>}
      {conditionList && (
        <div className="spanList">
          {conditionList.map((condition, index) => (
            <span className="condition" key={index}>
              {condition}
            </span>
          ))}
        </div>
      )}
      <div className="inputContainer">
        {multiline ? (
          <textarea
            name={name}
            value={enteredValue}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            data-status={status}
          />
        ) : (
          <input
            name={name ? name : label}
            value={enteredValue}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            data-status={status}
          />
        )}
        {status == "success" && (
          <CheckIcon size={20} style={{ position: "absolute", right: "8px" }} />
        )}
      </div>
      {status === "invalid" && (
        <div className="spanList">
          {conditionCheckList
            ?.filter((check) => !check.condition(enteredValue))
            .map((check) => (
              <span key={check.messageOnError} className="error">
                {check.messageOnError}
              </span>
            ))}
        </div>
      )}
    </EmotionWrapper>
  );
};

export default TextInput;

const EmotionWrapper = styled.div<Props>`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-size: 12px;
    font-weight: 300;
    margin-left: 2px;
  }

  span.label {
    font-size: 16px;
    color: ${({ theme }) => theme.color.gray600};
  }

  span.condition {
    color: ${({ theme }) => theme.color.gray400};
  }

  span.error {
    color: ${({ theme }) => theme.color.danger600};
  }

  div.spanList {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 4px;
  }

  div.inputContainer {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  input {
    ${({ theme }) => commonStyles(theme)};
    position: relative;
  }

  textarea {
    ${({ theme }) => commonStyles(theme)};
    position: relative;
    resize: none;
    height: ${({ height }) => (height ? height : "auto")};
  }
`;

const commonStyles = (theme: Theme) => {
  return css`
    width: 100%;
    padding: 6px;
    position: absolute;
    font-size: 14px;
    border-radius: 6px;
    border: 0.5px solid ${theme.color.gray500};

    color: ${theme.color.gray600};

    line-height: 1.5;

    &:focus {
      outline: none;
      border: 1.5px solid ${theme.color.primary500};
      box-shadow: ${theme.shadow.default};
    }

    &[data-status="success"] {
      border: 1px solid ${theme.color.primary700};
      padding-right: 35px;
    }

    &[data-status="invalid"] {
      outline: none;
      border: 0.5px solid ${theme.color.danger600};
      box-shadow: ${theme.shadow.default};
      color: ${theme.color.danger600};
    }

    &::placeholder {
      color: ${theme.color.gray400};
      font-size: 14px;
      font-weight: 300;
    }
  `;
};
