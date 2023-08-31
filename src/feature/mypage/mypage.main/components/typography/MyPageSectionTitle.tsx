import styled from "@emotion/styled";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MyPageSectionTitle = ({ children }: Props) => {
  return <EmotionWrapper>{children}</EmotionWrapper>;
};

export default MyPageSectionTitle;

const EmotionWrapper = styled.h2`
  font-size: 12px;
  color: ${({ theme }) => theme.color.gray500};
  margin-bottom: 16px;
`;
