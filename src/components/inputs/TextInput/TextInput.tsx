import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";
import CheckIcon from "components/inputs/TextInput/CheckIcon";

interface Props {
  label?: string;
  placeholder?: string;
  conditionList?: string[];
  conditionChecks?: ((text: string) => boolean)[];
  multiline?: boolean;
}

const TextInput: React.FC<Props> = ({
  label,
  placeholder = "",
  conditionList,
  conditionChecks,
  multiline = false,
}) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [borderStyle, setBorderStyle] = useState("default");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsValid(conditionChecks ? conditionChecks.every((check) => check(value)) : true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    // 입력된 텍스트의 조건 확인을 수행하여 isValid 상태 업데이트
    if (isFocused) {
      setIsValid(conditionChecks ? conditionChecks.every((check) => check(newValue)) : true);
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

  const InputComponent = multiline ? StyledTextarea : StyledInput;

  return (
    <EmotionWrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      {conditionList && (
        <ConditionListWrapper>
          {conditionList.map((condition, index) => (
            <StyledCondition key={index}>{condition}</StyledCondition>
          ))}
        </ConditionListWrapper>
      )}
      <StyledInputWrapper>
        <InputComponent
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          isValid={isValid}
          isFocused={isFocused}
          borderStyle={borderStyle}
        ></InputComponent>
        {value && isValid && !isFocused && <CheckIcon size={20} />}
      </StyledInputWrapper>
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
`;

const ConditionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 4px;
`;

const StyledCondition = styled.span`
  font-size: 12px;
  font-weight: 300;
  margin-left: 2px;
  color: ${({ theme }) => theme.color.gray400};
`;

const StyledLabel = styled.span`
  color: ${({ theme }) => theme.color.gray600};
  font-size: 16px;
  font-weight: 300;
  margin-left: 2px;
`;

const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
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

const StyledInput = styled.input<
  Props & { isValid: boolean; isFocused: boolean; borderStyle: string }
>`
  ${({ theme, isValid, isFocused, borderStyle }) =>
    commonStyles(theme, isValid, isFocused, borderStyle)};

  position: relative;
`;

const StyledTextarea = styled.textarea<
  Props & { isValid: boolean; isFocused: boolean; borderStyle: string }
>`
  ${({ theme, isValid, isFocused, borderStyle }) =>
    commonStyles(theme, isValid, isFocused, borderStyle)};
  resize: none;
`;

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
        border: 0.5px solid ${theme.color.danger600};
        box-shadow: ${theme.shadow.default};
      `;
    default:
      return css`
        border: 0.5px solid ${theme.color.gray500};
      `;
  }
};
