import { useRouter } from "next/router";
import ViewOrganizationMemberPage from "feature/organization/organization.members/views/ViewOrganizationMembersPage";

const PageOrganizationMember = () => {
  const { query } = useRouter();
  const organizationId = (query.organizationId ?? 0) as number;
  /**
   * TODO: userAuth 받아오기
   */
  const userAuth = 0;

  return <ViewOrganizationMemberPage organizationId={organizationId} userAuth={userAuth} />;
};

export default PageOrganizationMember;
