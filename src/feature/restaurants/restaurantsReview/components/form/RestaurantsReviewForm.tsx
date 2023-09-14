import styled from "@emotion/styled";
import Rating from "components/rating/Rating";

interface Props {
  restaurantId: string | number | string[];
  isEditMode: boolean;
  reviewId?: string | number | string[];
  score?: number;
  content?: string;
}

const RestaurantsReviewForm: React.FC<Props> = ({ restaurantId }) => {
  return (
    <EmotionWrapper>
      <Rating value={3} isInput={true} />
    </EmotionWrapper>
  );
};

export default RestaurantsReviewForm;

const EmotionWrapper = styled.div``;
