import React, { useState } from "react";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";
import CheckIcon from "components/inputs/TextInput/CheckIcon";

interface Props {
  name?: string;
  label?: string;
  placeholder?: string;
  conditionList?: string[];
  conditionCheckList?: ((text: string) => boolean)[];
  multiline?: boolean;
  errorMessage?: string;
  onTextChange?: (value: string, isValid: boolean) => void;
}

const TextInput: React.FC<Props> = ({
  name,
  label,
  placeholder = "",
  conditionList,
  conditionCheckList,
  multiline = false,
  errorMessage = "잘못된 입력입니다.",
  onTextChange,
}) => {
  const [status, setStatus] = useState("default"); // default / success / invalid / focus
  const [value, setValue] = useState("");
  const [isBlurred, setIsBlurred] = useState(false);

  const handleFocus = () => {
    setStatus("focus");
  };

  const handleBlur = () => {
    if (value == "") {
      setStatus("default");
    } else {
      if (conditionCheckList ? conditionCheckList.every((check) => check(value)) : true) {
        setStatus("success");
        setIsBlurred(true);
        if (onTextChange) {
          onTextChange(value, true); // Notify parent component that input is valid
        }
      } else {
        setStatus("invalid");
        if (onTextChange) {
          onTextChange(value, false); // Notify parent component that input is invalid
        }
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    // 최초 Blur 발생 후, 입력된 텍스트의 조건 확인을 수행하여 isValid 상태 업데이트
    if (isBlurred && newValue != "") {
      if (conditionCheckList ? conditionCheckList.every((check) => check(newValue)) : true) {
        setStatus("focus");
      } else {
        setStatus("invalid");
      }
    } else {
      setStatus("focus");
    }

    if (onTextChange) {
      onTextChange(newValue, status != "invalid" && status != "default");
    }
  };

  return (
    <EmotionWrapper>
      {label && <span className="label">{label}</span>}
      {conditionList && (
        <div className="conditionList">
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
            name={name ? name : label}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            data-status={status}
          />
        ) : (
          <input
            name={name ? name : label}
            value={value}
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
      {status == "invalid" && <span className="error">{errorMessage}</span>}
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

  div.conditionList {
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
    resize: none;
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
