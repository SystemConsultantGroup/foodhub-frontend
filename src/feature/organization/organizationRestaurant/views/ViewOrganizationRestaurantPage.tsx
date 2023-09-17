import styled from "@emotion/styled";
import OrganizationRestaurantsSection from "feature/organization/organizationRestaurant/components/section/OrganizationRestaurantsSection";

interface Props {
  organizationId: string | number | string[];
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
