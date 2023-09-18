import { useRouter } from "next/router";
import ViewOrganizationMainPage from "feature/organization/organizationMain/view/ViewOrganizationMainPage";

const PageOrganizationDetail = () => {
  const { query } = useRouter();
  const organizationId = query.organizationId ?? 0;

  return <ViewOrganizationMainPage organizationId={organizationId}></ViewOrganizationMainPage>;
};

export default PageOrganizationDetail;
