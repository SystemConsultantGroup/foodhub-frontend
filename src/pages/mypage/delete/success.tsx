import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";
import { GetServerSideProps } from "next";

const PageMyPageDeleteSuccess = () => {
  return (
    <EmotionWrapper>
      <PageMarker title="계정삭제 성공 완료" description="계정 삭제 성공 페이지" />
    </EmotionWrapper>
  );
};

export default PageMyPageDeleteSuccess;

const EmotionWrapper = styled.div``;

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
