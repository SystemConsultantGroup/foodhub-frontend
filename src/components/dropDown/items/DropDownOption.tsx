import React from "react";
import styled from "@emotion/styled";

export interface Props {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: (value: string) => void;
}

const DropDownOption: React.FC<Props> = ({
  children,
  value,
  disabled = false,
  isSelected = false,
  onClick,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick(value);
    }
  };

  return (
    <EmotionWrapper
      value={value}
      disabled={disabled}
      isSelected={isSelected}
      className={isSelected ? "selected" : ""}
      onClick={handleClick}
    >
      {children}
    </EmotionWrapper>
  );
};

const EmotionWrapper = styled.option<Props>`
  width: 100%;
  color: ${({ theme }) => theme.color.gray500};
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 0.5px solid ${({ theme }) => theme.color.gray300};
  line-height: 2;
  font-size: 14px;
  font-weight: 300;
  text-indent: 8px;

  &:hover {
    font-weight: 300;
    background-color: ${({ theme }) => theme.color.primary100};
    cursor: pointer;
  }

  &.selected {
    font-weight: 400;
    background-color: ${({ theme }) => theme.color.primary100};
    cursor: pointer;
  }

  &:disabled {
    font-weight: 300;
    color: ${({ theme }) => theme.color.gray200};
    background-color: ${({ theme }) => theme.color.gray100};
    cursor: not-allowed;
  }
`;

export default DropDownOption;
