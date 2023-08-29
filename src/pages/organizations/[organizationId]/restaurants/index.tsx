import styled from "@emotion/styled";
import { useRouter } from "next/router";
import ViewOrganizationRestaurantPage from "feature/organization/organizationRestaurant/views/ViewOrganizationRestaurantPage";

const PageOrganizationRestaurant = () => {
  const { query } = useRouter();
  const organizationId = query.organizationId ?? 0;

  return (
    <EmotionWrapper>
      <ViewOrganizationRestaurantPage organizationId={organizationId} />
    </EmotionWrapper>
  );
};

export default PageOrganizationRestaurant;

const EmotionWrapper = styled.div``;
