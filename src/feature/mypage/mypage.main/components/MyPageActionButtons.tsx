import styled from "@emotion/styled";
import Button from "components/button/Button";
import Link from "next/link";

const MyPageActionButtons = () => {
  return (
    <EmotionWrapper>
      {/* TODO: 공통 컴포넌트 Button 으로 대체 */}
      <Link href="/mypage/edit">
        <Button>내 정보 수정</Button>
      </Link>
    </EmotionWrapper>
  );
};

export default MyPageActionButtons;

const EmotionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 16px;
`;
