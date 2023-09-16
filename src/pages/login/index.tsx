import styled from "@emotion/styled";
import { LINK_MAIN_PAGE } from "constant/link";
import ViewLogin from "feature/auth/auth.login/views/ViewLogin";
import { GetServerSideProps } from "next";

const PageLogin = () => {
  return (
    <EmotionWrapper>
      <ViewLogin />
    </EmotionWrapper>
  );
};

export default PageLogin;

const EmotionWrapper = styled.div``;

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  /**
   * 인증되어 있을 경우 로그인 페이지 접근 불가
   * TODO: API 개발 완료 시 위 로직 추가
   */
  const isLoggedIn = req.cookies.accessToken;

  if (isLoggedIn) {
    res.writeHead(302, { Location: LINK_MAIN_PAGE });
    res.end();
  }

  return {
    props: {},
  };
};
