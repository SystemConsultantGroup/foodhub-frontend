import { useRouter } from "next/router";
import ViewOrganizationRestaurantPage from "feature/organization/organizationRestaurant/views/ViewOrganizationRestaurantPage";

const PageOrganizationRestaurant = () => {
  const { query } = useRouter();
  const organizationId = query.organizationId ?? 0;

  return <ViewOrganizationRestaurantPage organizationId={organizationId} />;
};

export default PageOrganizationRestaurant;
