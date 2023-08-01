import styled from "@emotion/styled";
import Image from "next/image";
import { useState, ButtonHTMLAttributes } from "react";
import { getButtonStyles, getWidthStyles, setLoadingStyles } from "components/button/styles";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text" | "icon" | "iconWithText"; // color types
  widthType?: "default" | "fullWidth"; // default : hug
  isLoading?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  widthType = "default",
  onClick,
  ...props
}: Props) => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsButtonLoading(true); // 클릭 시 loading 상태를 true로 변경

    try {
      if (onClick) {
        await onClick(); // 부모 컴포넌트에서 전달받은 함수 호출
      }
    } catch (error) {
      console.error("Error performing async work:", error);
    }

    setIsButtonLoading(false); // 완료 시 loading 상태를 false로 변경
  };

  return (
    <EmotionWrapper
      variant={variant}
      widthType={widthType}
      disabled={isButtonLoading}
      onClick={handleButtonClick}
      isLoading={isButtonLoading}
      {...props}
    >
      {isButtonLoading && (
        <Image src="/images/Spin-1s-100px-gray.svg" alt="Loading Spinner" width={14} height={14} />
      )}
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
    font-weight: 300;
  }

  &:disabled {
    pointer-events: none;
    background-color: ${({ theme }) => theme.color.gray100};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.gray200};
    span {
        color: ${({ theme }) => theme.color.gray200}
    }
  };
  
  ${({ theme, variant }) => getButtonStyles(theme, variant)};
  ${({ theme, widthType }) => getWidthStyles(theme, widthType)};
  ${({ isLoading }) => setLoadingStyles(isLoading)};
`;
