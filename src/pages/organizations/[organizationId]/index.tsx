import styled from "@emotion/styled";
import { useRouter } from "next/router";
import ViewOrganizationMainPage from "feature/organization/organizationMain/view/ViewOrganizationMainPage";

const PageOrganizationDetail = () => {
  const { query } = useRouter();
  const organizationId = query.organizationId ?? 0;

  return (
    <EmotionWrapper>
      <ViewOrganizationMainPage organizationId={organizationId}></ViewOrganizationMainPage>
    </EmotionWrapper>
  );
};

export default PageOrganizationDetail;

const EmotionWrapper = styled.div``;
