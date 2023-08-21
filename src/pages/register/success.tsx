import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";
import { GetServerSideProps } from "next";

const PageRegisterSuccess = () => {
  return (
    <EmotionWrapper>
      <PageMarker
        title="회원가입 성공 페이지"
        description="회원가입 (닉네임 세팅) 하고 나서 랜딩되는 페이지"
      />
    </EmotionWrapper>
  );
};

export default PageRegisterSuccess;

const EmotionWrapper = styled.div``;

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  /**
   * 가능하다면, URL 을 통해 직접 접근하는 것을 막을 방도를 생각해보면 좋지 않을까...
   */
  const hasUserAlreadyViewedSuccessPage = false;

  if (hasUserAlreadyViewedSuccessPage) {
    res.writeHead(302, { Location: "/" });
    res.end();
  }

  return {
    props: {},
  };
};
