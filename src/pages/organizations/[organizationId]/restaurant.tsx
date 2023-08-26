import styled from "@emotion/styled";
import { useRouter } from "next/router";
import ViewOrganizationRestaurant from "feature/organization/organizationRestaurant/views/ViewOrganizationRestaurant";

const PageOrganizationRestaurant = () => {
  const { query } = useRouter();
  const organizationId = query.organizationId ?? 0;

  return (
    <EmotionWrapper>
      <ViewOrganizationRestaurant organizationId={organizationId} />
    </EmotionWrapper>
  );
};

export default PageOrganizationRestaurant;

const EmotionWrapper = styled.div``;
