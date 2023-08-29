import styled from "@emotion/styled";
import { useRouter } from "next/router";
import ViewOrganizationMemberPage from "feature/organization/organizationMember/views/ViewOrganizationMemberPage";

const PageOrganizationMember = () => {
  const { query } = useRouter();
  const organizationId = query.organizationId ?? 0;

  return (
    <EmotionWrapper>
      <ViewOrganizationMemberPage organizationId={organizationId} />
    </EmotionWrapper>
  );
};

export default PageOrganizationMember;

const EmotionWrapper = styled.div``;
