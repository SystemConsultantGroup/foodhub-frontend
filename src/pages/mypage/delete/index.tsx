import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";
import { GetServerSideProps } from "next";
import Link from "next/link";

const PageMyPageDelete = () => {
  return (
    <EmotionWrapper>
      <PageMarker title="계정삭제 확인" description="계정 삭제 확인 페이지" />
      <Link href="/mypage/delete/success">
        <span>임시: 계정 삭제 성공 페이지 이동</span>
      </Link>
    </EmotionWrapper>
  );
};

export default PageMyPageDelete;

const EmotionWrapper = styled.div``;

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  /**
   * 로그인하지 않은 경우 메인 페이지로 이동
   * 마이페이지로부터 유입되지 않은 경우 메인 페이지로 이동
   */

  const referer = req.headers.referer;
  const isLoggedIn = true;
  const isFromMyPage = referer?.includes("/mypage");
  const shouldRedirect = !isLoggedIn || !isFromMyPage;

  if (shouldRedirect) {
    res.writeHead(302, { Location: "/" });
    res.end();
  }

  return {
    props: {},
  };
};
