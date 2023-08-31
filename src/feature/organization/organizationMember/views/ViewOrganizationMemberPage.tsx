import styled from "@emotion/styled";
import OrganizationMemberSection from "../components/section/OrganizationMemberSection";

interface Props {
  organizationId: string | number | string[];
}

const ViewOrganizationMemberPage: React.FC<Props> = ({ organizationId }) => {
  return (
    <EmotionWrapper>
      <OrganizationMemberSection organizationId={organizationId} />
    </EmotionWrapper>
  );
};

export default ViewOrganizationMemberPage;

const EmotionWrapper = styled.div``;
