import { useRouter } from "next/router";
import ViewOrganizationRestaurantPage from "feature/organization/organization.restaurants/views/ViewOrganizationRestaurantsPage";

const PageOrganizationRestaurant = () => {
  const { query } = useRouter();
  const organizationId = (query.organizationId ?? 0) as number;

  return <ViewOrganizationRestaurantPage organizationId={organizationId} />;
};

export default PageOrganizationRestaurant;
