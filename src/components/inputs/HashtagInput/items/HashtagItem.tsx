import styled from "@emotion/styled";
import { LiHTMLAttributes, ReactNode, useCallback } from "react";

interface Props extends Omit<LiHTMLAttributes<HTMLLIElement>, "onClick"> {
  children: ReactNode;
  onClick: (hashtag: string) => void;
}

const HashtagItem = ({ children, onClick, ...props }: Props) => {
  const handleClickHashtag = useCallback(() => {
    onClick(typeof children === "string" ? children : "");
  }, [children, onClick]);

  return (
    <EmotionWrapper onClick={handleClickHashtag} {...props}>
      {children}
    </EmotionWrapper>
  );
};

export default HashtagItem;

const EmotionWrapper = styled.li`
  position: relative;
  display: inline-block;
  padding: 4px 8px;

  border-radius: 4px;
  margin-right: 8px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.color.primary200};
  color: ${({ theme }) => theme.color.primary700};
`;
