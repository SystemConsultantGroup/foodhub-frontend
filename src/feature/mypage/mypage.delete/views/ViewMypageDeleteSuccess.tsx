import styled from "@emotion/styled";
import Button from "components/button/Button";
import Link from "next/link";

const ViewMypageDeleteSuccess = () => {
  const mainPageUrl = "/";

  return (
    <EmotionWrapper>
      <h1>회원탈퇴가 완료되었습니다.</h1>
      <Link href={mainPageUrl}>
        <Button>푸드허브 메인으로</Button>
      </Link>
    </EmotionWrapper>
  );
};

export default ViewMypageDeleteSuccess;

const EmotionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  margin-top: 200px;

  h1 {
    font-size: 20px;
    font-weight: 700;
  }

  button {
    margin-top: 100px;
  }
`;
