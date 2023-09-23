import { useRouter } from "next/router";
import ViewOrganizationMainPage from "feature/organization/organization.main/view/ViewOrganizationMainPage";

const PageOrganizationDetail = () => {
  const { query } = useRouter();
  const organizationId = (query.organizationId ?? 0) as number;

  return <ViewOrganizationMainPage organizationId={organizationId} />;
};

export default PageOrganizationDetail;
