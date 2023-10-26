import styled from "@emotion/styled";
import { useRouter } from "next/router";
import ViewRestaurantDetail from "feature/restaurants/restaurantsDetail/views/ViewRestaurantDetail";

const PageRestaurantDetail = () => {
  const { query } = useRouter();
  const restaurantId = (query.restaurantId ?? 0) as string;

  return (
    <EmotionWrapper>
      <ViewRestaurantDetail restaurantId={restaurantId} />
    </EmotionWrapper>
  );
};

export default PageRestaurantDetail;

const EmotionWrapper = styled.div``;
