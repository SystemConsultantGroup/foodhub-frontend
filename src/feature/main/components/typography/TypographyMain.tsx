import { ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  children: ReactNode;
}

const TypographyMain = ({ children }: Props) => {
  return <EmotionWrapper>{children}</EmotionWrapper>;
};

export default TypographyMain;

const EmotionWrapper = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;
