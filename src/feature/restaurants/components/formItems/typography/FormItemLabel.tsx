import { ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  children?: ReactNode;
}

const FormItemLabel = ({ children }: Props) => {
  return <EmotionWrapper>{children}</EmotionWrapper>;
};

export default FormItemLabel;

const EmotionWrapper = styled.label`
  display: block;
  color: ${({ theme }) => theme.color.gray600};
  font-size: 16px;
  font-weight: 300;
  margin-left: 2px;
  margin-bottom: 8px;
`;
