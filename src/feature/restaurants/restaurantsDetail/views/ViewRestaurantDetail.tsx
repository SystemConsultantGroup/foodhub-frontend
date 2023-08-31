import styled from "@emotion/styled";
import RestaurantDetailHeaderSection from "feature/restaurants/restaurantsDetail/components/section/RestaruantDetailHeaderSection";

interface Props {
  restaurantId: string | number | string[];
}

const ViewRestaurantDetail: React.FC<Props> = ({ restaurantId }) => {
  /**
   * TODO 1: 사용자 권한 불러오기
   */
  const userAuth = 0;

  /**
   * TODO 2: 맛집 상세 정보 불러오기
   */
  const restaurant = {
    id: restaurantId,
    userId: 1,
    groupId: 1,
    name: "봉수육",
    address: "경기도 수원시 율전동",
    link: "http://naver.me/FJFkPs94",
    delivery: false,
    comment: "수육나베 맛있어요",
    categoryId: 1,
    capacity: 15,
    openingHour: "오후 4시 ~ 오후 10시",
    recommnededMenu: "수육나베",
    orderTip: "수육 2인분 이상 주문시 수육나베 변경 가능",
    isActivated: true,
    organizationName: "시스템 컨설턴트 그룹",
  };

  return (
    <EmotionWrapper>
      <RestaurantDetailHeaderSection
        restaurantId={restaurantId}
        userAuth={userAuth}
        restaurantName={restaurant.name}
        restaurantAddress={restaurant.address}
        comment={restaurant.comment}
        organizationName={restaurant.organizationName}
        link={restaurant.link}
      />
    </EmotionWrapper>
  );
};

export default ViewRestaurantDetail;

const EmotionWrapper = styled.div``;
