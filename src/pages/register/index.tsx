import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";
import { LINK_MAIN_PAGE } from "constant/link";
import { GetServerSideProps } from "next";

const PageRegister = () => {
  return (
    <EmotionWrapper>
      <PageMarker title="회원가입 페이지" description="회원가입 (닉네임 세팅) 하는 페이지" />
    </EmotionWrapper>
  );
};

export default PageRegister;

const EmotionWrapper = styled.div``;

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  /**
   * 이미 닉네임을 세팅한 경우 이 페이지 접근 불가
   * 카카오로 로그인 하지 않았을 경우 이 페이지 접근 불가
   * TODO: API 개발 완료 시 위 로직 추가
   */
  const isNicknameAlreadySet = false;
  const hasAuthenticated = true;

  if (isNicknameAlreadySet || !hasAuthenticated) {
    res.writeHead(302, { Location: LINK_MAIN_PAGE });
    res.end();
  }

  return {
    props: {},
  };
};
