import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";
import { GetServerSideProps } from "next";

const PageLogin = () => {
  return (
    <EmotionWrapper>
      <PageMarker
        title="로그인 페이지"
        description="카카오 계정을 이용해 로그인할 수 있는 페이지"
      />
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
    res.writeHead(302, { Location: "/" });
    res.end();
  }

  return {
    props: {},
  };
};
