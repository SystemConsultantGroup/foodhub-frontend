import styled from "@emotion/styled";

interface Props {
  restaurantId: string | number | string[];
  isEditMode: boolean;
  reviewId?: string | number | string[];
  score?: number;
  content?: string;
}

const RestaurantsReviewForm: React.FC<Props> = ({ restaurantId }) => {
  return <EmotionWrapper></EmotionWrapper>;
};

export default RestaurantsReviewForm;

const EmotionWrapper = styled.div``;
