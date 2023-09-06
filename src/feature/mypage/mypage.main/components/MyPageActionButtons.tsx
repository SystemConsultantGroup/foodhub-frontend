import Link from "next/link";
import styled from "@emotion/styled";
import Button from "components/button/Button";

const MyPageActionButtons = () => {
  const LOGOUT_REDIRECT_URL = "/";

  return (
    <EmotionWrapper>
      <Link href="/mypage/edit">
        <Button variant="text">내 정보 수정</Button>
      </Link>
      <Link href={LOGOUT_REDIRECT_URL}>
        <Button variant="text" className="button-logout">
          로그아웃
        </Button>
      </Link>
    </EmotionWrapper>
  );
};

export default MyPageActionButtons;

const EmotionWrapper = styled.div`
  float: right;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  .button-logout {
    color: ${({ theme }) => theme.color.danger600};
  }
`;
