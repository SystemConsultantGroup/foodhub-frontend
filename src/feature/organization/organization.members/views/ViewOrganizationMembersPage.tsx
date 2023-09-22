import styled from "@emotion/styled";
import OrganizationMemberSection from "feature/organization/organization.members/components/section/OrganizationMembersSection";

interface Props {
  organizationId: number;
  userAuth: number;
}

const ViewOrganizationMemberPage: React.FC<Props> = ({ organizationId, userAuth }) => {
  return (
    <EmotionWrapper>
      <OrganizationMemberSection organizationId={organizationId} userAuth={userAuth} />
    </EmotionWrapper>
  );
};

export default ViewOrganizationMemberPage;

const EmotionWrapper = styled.div``;
