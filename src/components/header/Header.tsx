import styled from "@emotion/styled";
import { LAYOUT_MARGIN } from "constant/layoutMargin";

interface Props {}

const Header = ({}: Props) => {
  return (
    <EmotionWrapper>
      <div className="content-wrapper">
        <p className="main-question">... 우리 이번에 어디서 밥먹지? </p>
        <p className="main-answer">야! 저번에 갔던 거기 있잖아 우리 자주 가던 곳!</p>
      </div>
    </EmotionWrapper>
  );
};

export default Header;

const EmotionWrapper = styled.div`
  ${({ theme }) => theme.device.mobile} {
    display: none;
  }
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadow.default};
  padding: ${LAYOUT_MARGIN};
  .content-wrapper {
    width: 100%;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 768px;
    margin: 0 auto;

    .main-question {
      color: ${({ theme }) => theme.color.gray300};
      font-size: 16px;
      font-weight: 700;
    }

    .main-answer {
      margin-top: 16px;
      color: ${({ theme }) => theme.color.black};
      font-size: 32px;
      font-weight: 700;
    }

    h1 {
      font-size: 48px;
      font-weight: 700;
      color: ${({ theme }) => theme.color.black};
    }
  }
`;
