import React from "react";
import styled from "@emotion/styled";

export interface Props {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (value: string) => void;
}

const DropDownOption: React.FC<Props> = ({ children, value, disabled = false, onClick }) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick(value);
    }
  };

  return (
    <EmotionWrapper value={value} disabled={disabled} onClick={handleClick}>
      {children}
    </EmotionWrapper>
  );
};

const EmotionWrapper = styled.div<Props>`
  width: 100%;
  color: ${({ theme }) => theme.color.gray500};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.gray100 : theme.color.white};
  border: 0.5px solid ${({ theme }) => theme.color.gray300};
  line-height: 2;
  padding-left: 8px;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;

  &.selected {
  }
`;

export default DropDownOption;
