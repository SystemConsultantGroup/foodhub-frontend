import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";
import { useRouter } from "next/router";

interface Props {}

const PageRestaurantDetail = ({}: Props) => {
  const { query } = useRouter();
  const restaurantId = query.restaurantId ?? 0;

  return (
    <EmotionWrapper>
      <PageMarker
        title={`${restaurantId} 번 맛집 상세 페이지`}
        description="맛집에 대한 상세 정보를 볼 수 있는 페이지 "
      />
    </EmotionWrapper>
  );
};

export default PageRestaurantDetail;

const EmotionWrapper = styled.div``;
