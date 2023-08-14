import React, { HTMLAttributes } from "react";
import styled from "@emotion/styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const DropDownOption: React.FC<Props> = ({ children, value, disabled = false }) => {
  return (
    <EmotionWrapper value={value} disabled={disabled}>
      {children}
    </EmotionWrapper>
  );
};

const EmotionWrapper = styled.div<Props>`
  width: 100%;
  color: ${({ theme }) => theme.color.gray500};
  background-color: ${({ theme }) => theme.color.white};
  border: 0.5px solid ${({ theme }) => theme.color.gray300};
  line-height: 2;
  padding-left: 8px;
  font-size: 14px;
  font-weight: 300;

  &.selected {
  }
  &:disabled {
  }
`;

export default DropDownOption;
