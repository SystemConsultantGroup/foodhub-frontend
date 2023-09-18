import styled from "@emotion/styled";
import OrganizationMemberSection from "feature/organization/organizationMembers/components/section/OrganizationMembersSection";

interface Props {
  organizationId: string | number | string[];
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
