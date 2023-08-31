import styled from "@emotion/styled";
import OrganizationRestaurantSection from "feature/organization/organizationRestaurant/components/section/OrganizationRestaurantSection";

interface Props {
  organizationId: string | number | string[];
}

const ViewOrganizationRestaurantPage: React.FC<Props> = ({ organizationId }) => {
  return (
    <EmotionWrapper>
      <OrganizationRestaurantSection organizationId={organizationId} />
    </EmotionWrapper>
  );
};

export default ViewOrganizationRestaurantPage;

const EmotionWrapper = styled.div``;
