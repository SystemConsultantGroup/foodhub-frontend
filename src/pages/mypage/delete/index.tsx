import { LINK_MAIN_PAGE, LINK_MYPAGE } from "constant/link";
import ViewMypageDelete from "feature/mypage/mypage.delete/views/ViewMypageDelete";
import { GetServerSideProps } from "next";

const PageMyPageDelete = () => {
  return <ViewMypageDelete />;
};

export default PageMyPageDelete;

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  /**
   * 로그인하지 않은 경우 메인 페이지로 이동
   * 마이페이지로부터 유입되지 않은 경우 메인 페이지로 이동
   */

  const referer = req.headers.referer;
  const isLoggedIn = true;
  const isFromMyPage = referer?.includes(LINK_MYPAGE);
  const shouldRedirect = !isLoggedIn || !isFromMyPage;

  if (shouldRedirect) {
    res.writeHead(302, { Location: LINK_MAIN_PAGE });
    res.end();
  }

  return {
    props: {},
  };
};
