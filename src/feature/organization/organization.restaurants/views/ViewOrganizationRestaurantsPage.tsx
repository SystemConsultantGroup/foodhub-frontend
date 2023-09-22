import styled from "@emotion/styled";
import OrganizationRestaurantsSection from "feature/organization/organization.restaurants/components/section/OrganizationRestaurantsSection";

interface Props {
  organizationId: number;
}

const ViewOrganizationRestaurantPage: React.FC<Props> = ({ organizationId }) => {
  return (
    <EmotionWrapper>
      <OrganizationRestaurantsSection organizationId={organizationId} />
    </EmotionWrapper>
  );
};

export default ViewOrganizationRestaurantPage;

const EmotionWrapper = styled.div``;
