import styled from "@emotion/styled";
import OrganizationFormSection from "../components/section/OrganizationFormSection";

interface Props {
  organizationId: string | number | string[];
}

const ViewOrganizationManagementPage: React.FC<Props> = ({ organizationId }) => {
  return (
    <EmotionWrapper>
      <OrganizationFormSection organizationId={organizationId} />
    </EmotionWrapper>
  );
};

export default ViewOrganizationManagementPage;

const EmotionWrapper = styled.div``;