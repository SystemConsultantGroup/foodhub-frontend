import styled from "@emotion/styled";
import RestaurantsReviewForm from "feature/restaurants/restaurantsReview/components/form/RestaurantsReviewForm";

interface Props {
  restaurantId: string | number | string[];
}

const ViewRestaurantReviewCreate: React.FC<Props> = ({ restaurantId }) => {
  return (
    <EmotionWrapper>
      <RestaurantsReviewForm restaurantId={restaurantId} isEditMode={false} />
    </EmotionWrapper>
  );
};

export default ViewRestaurantReviewCreate;

const EmotionWrapper = styled.div``;
