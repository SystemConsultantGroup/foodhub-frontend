import ViewMypageDeleteSuccess from "feature/mypage/mypage.delete/views/ViewMypageDeleteSuccess";
import { GetServerSideProps } from "next";

const PageMyPageDeleteSuccess = () => {
  return <ViewMypageDeleteSuccess />;
};

export default PageMyPageDeleteSuccess;

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  /**
   * 로그인하지 않은 경우 메인 페이지로 이동
   * 로그인 되어 있으나, 탈퇴 페이지로부터 유입되지 않은 경우 메인 페이지로 이동
   */
  const referer = req.headers.referer;
  const isLoggedIn = false;
  const isFromDeletePage = referer?.includes("/mypage/delete");

  const shouldRedirect = !isLoggedIn || !isFromDeletePage;

  if (shouldRedirect) {
    res.writeHead(302, { Location: "/" });
    res.end();
  }

  return {
    props: {},
  };
};
