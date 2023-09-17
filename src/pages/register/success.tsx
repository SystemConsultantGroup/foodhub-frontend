import styled from "@emotion/styled";
import { LINK_MAIN_PAGE } from "constant/link";
import ViewRegisterSuccess from "feature/auth/auth.register/views/ViewRegisterSuccess";
import { GetServerSideProps } from "next";

const PageRegisterSuccess = () => {
  return (
    <EmotionWrapper>
      <ViewRegisterSuccess />
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
    res.writeHead(302, { Location: LINK_MAIN_PAGE });
    res.end();
  }

  return {
    props: {},
  };
};
