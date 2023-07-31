import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";
import { getButtonStyles, getWidthStyles } from "components/button/styles";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text" | "icon" | "iconWithText"; // color types
  loading?: boolean; // loading status
  widthType?: "default" | "fullWidth"; // default : hug
}

const Button = ({
  children,
  variant = "primary",
  loading = false,
  widthType = "default",
  ...props
}: Props) => {
  return (
    <EmotionWrapper variant={variant} loading={loading} widthType={widthType} {...props}>
      {children}
    </EmotionWrapper>
  );
};

export default Button;

export const EmotionWrapper = styled.button<Props>`
  padding: 4px 15px;
  gap: 15px;
  border-radius: 6px;
  height: auto;

  > svg {
    width: 14px;
    height: 14px;
    viewBox="0 0 14 14"
    preserveAspectRatio= "xMidYMid meet";
  }

  > span {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center; 
    text-align: center;
    font-size: 14px;
  }

  &:disabled {
    pointer-events: none;
    color: ${({ theme }) => theme.color.primary100}
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.primary200};
    span {
        color: ${({ theme }) => theme.color.primary200}
    }
  };
  
  ${({ theme, variant }) => getButtonStyles(theme, variant)};
  ${({ theme, widthType }) => getWidthStyles(theme, widthType)};
`;
