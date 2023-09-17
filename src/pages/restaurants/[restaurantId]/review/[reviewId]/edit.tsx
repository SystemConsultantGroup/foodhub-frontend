import { useRouter } from "next/router";
import ViewRestaurantReviewEdit from "feature/restaurants/restaurantsReview/views/ViewRestaurantsReviewEdit";

const PageReviewEdit = () => {
  const { query } = useRouter();
  const restaurantId = query.restaurantId ?? 0;
  const reviewId = query.reviewId ?? 0;
  return <ViewRestaurantReviewEdit restaurantId={restaurantId} reviewId={reviewId} />;
};

export default PageReviewEdit;
