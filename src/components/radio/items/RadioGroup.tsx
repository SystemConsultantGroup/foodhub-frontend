import { ReactNode } from "react";
import styled from "@emotion/styled";

export interface Props {
  label?: string;
  children: ReactNode;
}

const RadioGroup = ({ children, label }: Props) => {
  return (
    <EmotionWrapper>
      {label && <label>{label}</label>}
      <div className="radio-item-container">{children}</div>
    </EmotionWrapper>
  );
};

export default RadioGroup;

const EmotionWrapper = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
    font-weight: 300;
    margin-left: 2px;
    color: ${({ theme }) => theme.color.gray600};
  }

  .radio-item-container {
    display: flex;
    gap: 8px;
  }
`;
