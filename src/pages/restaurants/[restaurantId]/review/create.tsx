import { useRouter } from "next/router";
import ViewRestaurantReviewCreate from "feature/restaurants/restaurantsReview/views/ViewRestaurantsReviewCreate";

const PageReviewCreate = () => {
  const { query } = useRouter();
  const restaurantId = query.restaurantId ?? 0;
  return <ViewRestaurantReviewCreate restaurantId={restaurantId} />;
};

export default PageReviewCreate;
