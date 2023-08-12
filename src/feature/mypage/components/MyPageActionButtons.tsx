import styled from "@emotion/styled";
import Link from "next/link";

interface Props {}

const MyPageActionButtons = ({}: Props) => {
  return (
    <EmotionWrapper>
      {/* TODO: 공통 컴포넌트 Button 으로 대체 */}
      <Link href="/mypage/edit">
        <button>내 정보 수정</button>
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
