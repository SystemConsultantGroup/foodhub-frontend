import styled from "@emotion/styled";
import { useRouter } from "next/router";
import ViewOrganizationMember from "feature/organization/organizationMember/views/ViewOrganizationMember";

const PageOrganizationMember = () => {
  const { query } = useRouter();
  const organizationId = query.organizationId ?? 0;

  return (
    <EmotionWrapper>
      <ViewOrganizationMember organizationId={organizationId} />
    </EmotionWrapper>
  );
};

export default PageOrganizationMember;

const EmotionWrapper = styled.div``;
