import { GetServerSideProps } from "next";
import ViewMyPageEdit from "feature/mypage/mypage.edit/views/ViewMypageEdit";
import { LINK_LOGIN_PAGE } from "constant/link";

const PageMyPageEdit = () => {
  return <ViewMyPageEdit />;
};

export default PageMyPageEdit;

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  /**
   * 로그인하지 않은 경우 로그인 페이지로 이동
   */
  const isLoggedIn = true;

  if (!isLoggedIn) {
    res.writeHead(302, { Location: LINK_LOGIN_PAGE });
    res.end();
  }

  return {
    props: {},
  };
};
