import OrganizationMemberSection from "feature/organization/organization.members/components/section/OrganizationMembersSection";

interface Props {
  organizationId: number;
  userAuth: number;
}

const ViewOrganizationMemberPage: React.FC<Props> = ({ organizationId, userAuth }) => {
  return <OrganizationMemberSection organizationId={organizationId} userAuth={userAuth} />;
};

export default ViewOrganizationMemberPage;