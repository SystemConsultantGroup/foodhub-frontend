import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";
import CheckIcon from "components/inputs/TextInput/CheckIcon";

interface Props {
  label?: string;
  placeholder?: string;
  conditionList?: string[];
  conditionCheckList?: ((text: string) => boolean)[];
  multiline?: boolean;
  errorMessage?: string;
  onTextChange?: (value: string) => void;
}

const TextInput: React.FC<Props> = ({
  label,
  placeholder = "",
  conditionList,
  conditionCheckList,
  multiline = false,
  errorMessage = "잘못된 입력입니다.",
  onTextChange,
}) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isBlurred, setIsBlurred] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [borderStyle, setBorderStyle] = useState("default");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsBlurred(true);
    setIsValid(conditionCheckList ? conditionCheckList.every((check) => check(value)) : true);
    if (value == "") setIsValid(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    // 최초 Blur 발생 후, 입력된 텍스트의 조건 확인을 수행하여 isValid 상태 업데이트
    if (isFocused && isBlurred && newValue != "") {
      setIsValid(conditionCheckList ? conditionCheckList.every((check) => check(newValue)) : true);
    }
    if (newValue == "") setIsValid(true);

    if (onTextChange) {
      onTextChange(newValue);
    }
  };

  useEffect(() => {
    if (isValid) {
      isFocused
        ? setBorderStyle("focused")
        : value
        ? setBorderStyle("blur")
        : setBorderStyle("default");
    } else {
      setBorderStyle("invalid");
    }
  }, [isValid, isFocused, value]);

  return (
    <EmotionWrapper isValid={isValid} isFocused={isFocused} borderStyle={borderStyle}>
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
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        ) : (
          <input
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        )}
        {value && isValid && !isFocused && <CheckIcon size={20} />}
      </div>
      {!isValid && <span className="error">{errorMessage}</span>}
    </EmotionWrapper>
  );
};

export default TextInput;

const EmotionWrapper = styled.div<
  Props & { isValid: boolean; isFocused: boolean; borderStyle: string }
>`
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
    ${({ theme, isValid, isFocused, borderStyle }) =>
      commonStyles(theme, isValid, isFocused, borderStyle)};
    position: relative;
  }

  textarea {
    ${({ theme, isValid, isFocused, borderStyle }) =>
      commonStyles(theme, isValid, isFocused, borderStyle)};
    resize: none;
  }
`;

const commonStyles = (theme: Theme, isValid: boolean, isFocused: boolean, borderStyle: string) => {
  return css`
    width: 100%;
    padding: 6px;
    font-size: 14px;
    border-radius: 6px;

    line-height: 1.5;

    ${getBorderStyles(theme, borderStyle)};
    color: ${isValid ? theme.color.gray600 : theme.color.danger600};
    box-shadow: ${!isValid && theme.shadow.default};

    &::placeholder {
      color: ${theme.color.gray400};
      font-size: 14px;
      font-weight: 300;
    }
  `;
};

const getBorderStyles = (theme: Theme, variant: string) => {
  switch (variant) {
    case "focused":
      return css`
        outline: none;
        border: 1.5px solid ${theme.color.primary500};
        box-shadow: ${theme.shadow.default};
      `;
    case "blur":
      return css`
        border: 1px solid ${theme.color.primary700};
      `;
    case "invalid":
      return css`
        outline: none;
        border: 0.5px solid ${theme.color.danger600};
        box-shadow: ${theme.shadow.default};
      `;
    default:
      return css`
        border: 0.5px solid ${theme.color.gray500};
      `;
  }
};
