import styled from "@emotion/styled";
import { useState, ButtonHTMLAttributes } from "react";
import {
  getButtonStyles,
  getWidthStyles,
  setLoadingStyles,
  getPaddingStyles,
} from "components/button/styles";
import Loader from "components/loader/Loader";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text"; // color types
  icon?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  danger?: boolean;
}

const Button = ({
  children,
  icon,
  variant = "primary",
  fullWidth = false,
  loading = false,
  onClick,
  danger = false, // 버튼을 빨간색으로 표시
  ...props
}: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsActive(true);
    if (onClick) {
      onClick(event);
    }
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  return (
    <EmotionWrapper
      {...props}
      danger={danger}
      variant={variant}
      fullWidth
      disabled={loading}
      icon={icon}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={isActive ? "active" : ""}
    >
      {loading && <Loader />}
      {icon}
      {children}
    </EmotionWrapper>
  );
};

export default Button;

export const EmotionWrapper = styled.button<Props>`
  gap: 8px;
  border-radius: 6px;
  height: auto;
  line-height: 1.5;
  ${({ icon, children }) => getPaddingStyles(icon, children)};

  > svg {
    width: 14px;
    height: 14px;
    viewBox="0 0 14 14";
    preserveAspectRatio= "xMidYMid meet";
  }

  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center; 
  text-align: center;
  font-size: 14px;
  font-weight: 300;

  &:disabled {
    pointer-events: none;
    background-color: ${({ theme }) => theme.color.gray100};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.gray200};
    color: ${({ theme }) => theme.color.gray200}
  };
  
  ${({ theme, variant, danger }) => getButtonStyles(theme, variant, danger)};
  ${({ theme, fullWidth }) => getWidthStyles(theme, fullWidth)};
  ${({ loading }) => setLoadingStyles(loading)};

`;
