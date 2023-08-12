import { GetServerSideProps } from "next";
import ViewMypage from "feature/mypage/views/ViewMypage";

const PageMyPage = () => {
  return <ViewMypage />;
};

export default PageMyPage;

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
