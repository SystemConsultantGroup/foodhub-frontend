import styled from "@emotion/styled";
import { GetServerSideProps } from "next";
import ViewMyPageEdit from "feature/mypage/views/ViewMyPageEdit";

const PageMyPageEdit = () => {
  return (
    <EmotionWrapper>
      <ViewMyPageEdit />
      {/* <Link href="/mypage/delete">
        <span>임사: 계정 삭제 페이지 이동</span>
      </Link> */}
    </EmotionWrapper>
  );
};

export default PageMyPageEdit;

const EmotionWrapper = styled.div``;

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  /**
   * 로그인하지 않은 경우 로그인 페이지로 이동
   */
  const isLoggedIn = true;

  if (!isLoggedIn) {
    res.writeHead(302, { Location: "/login" });
    res.end();
  }

  return {
    props: {},
  };
};
