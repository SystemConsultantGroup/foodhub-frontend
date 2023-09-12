import styled from "@emotion/styled";
import OrganizationMemberSection from "feature/organization/organizationMember/components/section/OrganizationMemberSection";

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
