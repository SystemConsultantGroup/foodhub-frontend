import { useRouter } from "next/router";
import ViewOrganizationMemberPage from "feature/organization/organizationMembers/views/ViewOrganizationMembersPage";

const PageOrganizationMember = () => {
  const { query } = useRouter();
  const organizationId = query.organizationId ?? 0;
  /**
   * TODO: userAuth 받아오기
   */
  const userAuth = 1;

  return <ViewOrganizationMemberPage organizationId={organizationId} userAuth={userAuth} />;
};

export default PageOrganizationMember;
