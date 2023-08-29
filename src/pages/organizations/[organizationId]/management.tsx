import styled from "@emotion/styled";
import { useRouter } from "next/router";
import OrganizationManagement from "feature/organization/organizationManagement/views/ViewOrganizationManagementPage";

const PageOrganizationManagement = () => {
  const { query } = useRouter();
  const organizationId = query.organizationId ?? 0;

  return (
    <EmotionWrapper>
      <OrganizationManagement organizationId={organizationId} />
    </EmotionWrapper>
  );
};

export default PageOrganizationManagement;

const EmotionWrapper = styled.div``;
