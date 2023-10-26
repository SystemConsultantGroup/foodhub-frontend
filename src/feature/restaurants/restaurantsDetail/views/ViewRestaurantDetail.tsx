import styled from "@emotion/styled";
import RestaurantDetailImgSection from "feature/restaurants/restaurantsDetail/components/section/RestaurantDetailImgSection";
import RestaurantDetailHeaderSection from "feature/restaurants/restaurantsDetail/components/section/RestaurantDetailHeaderSection";
import RestaurantDetailInfoSection from "feature/restaurants/restaurantsDetail/components/section/RestaurantDetailInfoSection";
import RestaurantDetailReviewSection from "feature/restaurants/restaurantsDetail/components/section/RestaurantDetailReviewSection";
import Divider from "components/divider/Divider";
import { restaurant } from "feature/restaurants/restaurantsDetail/mockups/restaurant";
import { reviewPage1 } from "feature/restaurants/restaurantsDetail/mockups/reviews";

interface Props {
  restaurantId: string;
}

const ViewRestaurantDetail: React.FC<Props> = ({ restaurantId }) => {
  /**
   * TODO 1: 사용자 권한 불러오기
   */
  const userAuth = 0;

  /**
   * TODO 2: 맛집 상세 정보 불러오기
   */

  /**
   * TODO3: 맛집의 모든 리뷰 조회하기
   * - totalScore, totalPages 확인하기 위한 Read Reviews API 호출
   * - 리뷰가 없는 경우 404 에러 반환?
   */
  const { totalScore, totalCount, totalPages, scoreStatistics } = reviewPage1;

  return (
    <EmotionWrapper>
      <RestaurantDetailImgSection imgSrcList={restaurant.imgSrcList} />
      <RestaurantDetailHeaderSection
        restaurantId={restaurantId}
        userAuth={userAuth}
        restaurantName={restaurant.name}
        restaurantAddress={restaurant.address}
        organizationName={restaurant.organizationName}
        link={restaurant.link}
      />
      <RestaurantDetailInfoSection
        restaurantId={restaurantId}
        comment={restaurant.comment}
        orderTip={restaurant.orderTip}
        capacity={restaurant.capacity}
        recommendedMenus={restaurant.recommnededMenus}
        category={restaurant.category}
        delivery={restaurant.delivery}
        openingHour={restaurant.openingHour}
        tags={restaurant.tags}
        totalScore={totalScore}
        totalCount={totalCount}
      />
      <Divider />
      <RestaurantDetailReviewSection
        restaurantId={restaurantId}
        userAuth={userAuth}
        totalScore={totalScore}
        totalCount={totalCount}
        totalPages={totalPages}
        scoreStatistics={scoreStatistics}
      />
    </EmotionWrapper>
  );
};

export default ViewRestaurantDetail;

const EmotionWrapper = styled.div``;
