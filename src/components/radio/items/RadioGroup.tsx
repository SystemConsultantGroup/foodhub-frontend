import { ReactNode } from "react";
import styled from "@emotion/styled";

export interface Props {
  children: ReactNode;
}

const RadioGroup = ({ children }: Props) => {
  return <EmotionWrapper>{children}</EmotionWrapper>;
};

export default RadioGroup;

const EmotionWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
