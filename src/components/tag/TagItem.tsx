import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
import { Theme } from "@emotion/react";

export interface TagItemProps extends HTMLAttributes<HTMLDivElement> {
  textColor?: keyof Theme["color"];
  backColor?: keyof Theme["color"];
  outLined?: boolean;
  icon?: React.ReactNode;
}

const TagItem: React.FC<TagItemProps> = ({
  children,
  icon,
  textColor = "white",
  backColor = "primary600",
  outLined = false,
  ...props
}: TagItemProps) => {
  return (
    <EmotionWrapper {...props} textColor={textColor} backColor={backColor} outLined={outLined}>
      {icon}
      {children}
    </EmotionWrapper>
  );
};

export default TagItem;

const EmotionWrapper = styled.div<TagItemProps>`
  gap: 7px;
  padding: 2px 7px;
  border-radius: 6px;
  height: auto;
  line-height: 1.5;

  margin-right: 5px;

  display: inline-block;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 300;

  color: ${({ theme, textColor }) => textColor && theme.color[`${textColor}`]};
  background-color: ${({ theme, backColor }) => backColor && theme.color[`${backColor}`]};
  box-shadow: ${({ theme, outLined, textColor }) =>
    outLined && textColor && `inset 0 0 0 1px ${theme.color[textColor]}`};

  &:disabled {
    pointer-events: none;
    background-color: ${({ theme }) => theme.color.gray100};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.gray300};
    color: ${({ theme }) => theme.color.gray300};
  }
`;
