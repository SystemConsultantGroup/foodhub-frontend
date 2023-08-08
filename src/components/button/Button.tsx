import styled from "@emotion/styled";
import { useState, useEffect, ButtonHTMLAttributes } from "react";
import { getButtonStyles, getWidthStyles, setLoadingStyles } from "components/button/styles";
import Loader from "components/loader/Loader";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text"; // color types
  icon?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
}

const Button = ({
  children,
  icon,
  variant = "primary",
  fullWidth = false,
  loading = false,
  onClick,
  ...props
}: Props) => {
  const [padding, setPadding] = useState("4px 15px");
  const [isActive, setIsActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    console.log(isFocused);
  };

  useEffect(() => {
    if (icon && children) {
      setPadding("4px 8px");
    } else if (children) {
      setPadding("4px 15px");
    } else if (icon) {
      setPadding("4px 4px");
    }
  }, [icon, children]);

  return (
    <EmotionWrapper
      {...props}
      variant={variant}
      fullWidth={fullWidth}
      disabled={loading}
      icon={icon}
      style={{ ...props.style, ...{ padding: padding } }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={isActive ? "active" : ""}
    >
      {loading && <Loader></Loader>}
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
  
  ${({ theme, variant }) => getButtonStyles(theme, variant)};
  ${({ theme, fullWidth }) => getWidthStyles(theme, fullWidth)};
  ${({ loading }) => setLoadingStyles(loading)};

`;
