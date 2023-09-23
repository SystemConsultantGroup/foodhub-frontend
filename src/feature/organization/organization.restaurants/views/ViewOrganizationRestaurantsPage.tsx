import OrganizationRestaurantsSection from "feature/organization/organization.restaurants/components/section/OrganizationRestaurantsSection";

interface Props {
  organizationId: number;
}

const ViewOrganizationRestaurantPage: React.FC<Props> = ({ organizationId }) => {
  return <OrganizationRestaurantsSection organizationId={organizationId} />;
};

export default ViewOrganizationRestaurantPage;
