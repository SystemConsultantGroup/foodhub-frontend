import styled from "@emotion/styled";
import Button from "components/button/Button";
import { LINK_MAIN_PAGE } from "constant/link";
import { useRouter } from "next/router";

const ViewRegisterSuccess = () => {
  const { push } = useRouter();

  const foodhubNickname = "을지문덕"; // TODO: API 에서 받아오는 닉네임으로 변경

  const handleGotoMain = () => {
    push(LINK_MAIN_PAGE);
  };
  return (
    <EmotionWrapper>
      <p className="greeting">{foodhubNickname}님, 환영합니다!</p>
      <p className="instruction">쩝쩝대학의 다양한 맛집을 탐험해보세요!</p>

      {/* TODO: 각 공통 컴포넌트들이 className 을 받을 수 있게 된 후로 제거 */}
      <div className="space" />

      <Button fullWidth onClick={handleGotoMain}>
        쩝쩝대학 메인으로 가기
      </Button>
    </EmotionWrapper>
  );
};

export default ViewRegisterSuccess;

const EmotionWrapper = styled.div`
  p.greeting {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    line-height: 1.5;
  }

  p.instruction {
    margin-bottom: 64px;
  }

  .space {
    height: 64px;
  }
`;
