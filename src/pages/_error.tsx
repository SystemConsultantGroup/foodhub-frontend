import Link from "next/link";
import styled from "@emotion/styled";
import { NextPageContext } from "next";

interface Props {
  statusCode?: number;
  title?: string;
}

// 커스텀 에러 페이지
const CustomError = ({ statusCode, title }: Props) => {
  return (
    <EmotionWrapper>
      <p className="status-code">{statusCode}</p>
      <p className="title">{title}</p>
      <Link href="/">홈으로</Link>
    </EmotionWrapper>
  );
};

export default CustomError;

CustomError.getInitialProps = async ({ res, err, ...rest }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return {
    props: {
      statusCode,
    },
  };
};

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .status-code {
    font-size: 130px;
    font-weight: 900;
    margin-bottom: 24px;

    // inset shadow
    background: -webkit-repeating-linear-gradient(
      -45deg,

      ${({ theme }) => theme.color.primary200},
      ${({ theme }) => theme.color.primary300},
      ${({ theme }) => theme.color.primary400},
      ${({ theme }) => theme.color.primary500},
      ${({ theme }) => theme.color.primary600},
      ${({ theme }) => theme.color.primary700}
    );
    background-size: 400%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.25);
    animation: animate 5s ease-in-out infinite;
  }

  .title {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.color.gray500};
    text-align: center;
    line-height: 1.5;
  }

  @keyframes animate {
    0% {
      background-position: 0 0;
    }
    25% {
      background-position: 100% 0;
    }
    50% {
      background-position: 100% 100%;
    }
    75% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  a {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.primary500};
    text-decoration: none;

    padding: 8px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.primary100};
    transition: all 0.2s ease-in-out;
  }
`;
