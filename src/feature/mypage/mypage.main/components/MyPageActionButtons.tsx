import Link from "next/link";
import styled from "@emotion/styled";
import Button from "components/button/Button";
import { LINK_MAIN_PAGE, LINK_MYPAGE_EDIT } from "constant/link";

const MyPageActionButtons = () => {
  // TODO: API 연동 후 로그아웃 시 API 바로 호출되도록 수정
  const LOGOUT_REDIRECT_URL = LINK_MAIN_PAGE;

  return (
    <EmotionWrapper>
      <Link href={LINK_MYPAGE_EDIT}>
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
