import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";
import { GetServerSideProps } from "next";
import Link from "next/link";

const PageMyPageEdit = () => {
  return (
    <EmotionWrapper>
      <PageMarker
        title="마이페이지 수정"
        description="내 정보 (나이/성별), 내가 속한 단체 정보 수정 가능"
      />
      <Link href="/mypage/delete">
        <span>임사: 계정 삭제 페이지 이동</span>
      </Link>
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
