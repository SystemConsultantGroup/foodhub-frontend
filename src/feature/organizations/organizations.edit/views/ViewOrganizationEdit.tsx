import styled from "@emotion/styled";
import FormOrganization from "feature/organizations/components/OrganizationForm";

const ViewOrganizationEdit = () => {
  return (
    <EmotionWrapper>
      <FormOrganization isEditMode />
    </EmotionWrapper>
  );
};

export default ViewOrganizationEdit;

const EmotionWrapper = styled.div``;
