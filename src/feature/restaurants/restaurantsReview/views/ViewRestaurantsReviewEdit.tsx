import styled from "@emotion/styled";
import RestaurantsReviewForm from "feature/restaurants/restaurantsReview/components/form/RestaurantsReviewForm";

interface Props {
  restaurantId: string | number | string[];
  reviewId: string | number | string[];
}

const ViewRestaurantReviewEdit: React.FC<Props> = ({ restaurantId, reviewId }) => {
  /**
   * TODO: reviewId에 해당하는 리뷰 내용 불러오기
   */
  const review = {
    id: 1,
    userId: 1,
    score: 5,
    content:
      "리뷰 1 내가 먹어본 수육 중 인생수육임 ㄹㅇ 꼭 먹으셈 두번 먹으셈. 진짜 너무너무너무 맛있음. 내가 먹어본 수육 중 인생수육임 ㄹㅇ 꼭 먹으셈 두번 먹으셈. 진짜 너무너무너무 맛있음. 내가 먹어본 수육 중 인생수육임 ㄹㅇ 꼭 먹으셈 두번 먹으셈. 진짜 너무너무너무 맛있음",
    createdAt: new Date("2023-09-10"),
  };

  return (
    <EmotionWrapper>
      <RestaurantsReviewForm
        restaurantId={restaurantId}
        reviewId={review.id}
        score={review.score}
        content={review.content}
        isEditMode
      />
    </EmotionWrapper>
  );
};

export default ViewRestaurantReviewEdit;

const EmotionWrapper = styled.div``;
