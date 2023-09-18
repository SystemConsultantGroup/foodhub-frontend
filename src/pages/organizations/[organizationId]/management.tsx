import { useRouter } from "next/router";
import OrganizationManagement from "feature/organization/organizationManagement/views/ViewOrganizationManagementPage";

const PageOrganizationManagement = () => {
  const { query } = useRouter();
  const organizationId = query.organizationId ?? 0;

  return <OrganizationManagement organizationId={organizationId} />;
};

export default PageOrganizationManagement;
