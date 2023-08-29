import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";
import { useRouter } from "next/router";

const PageRestaurantEdit = () => {
  const { query } = useRouter();
  const restaurantId = query.restaurantId ?? 0;

  return (
    <EmotionWrapper>
      <PageMarker
        title={`${restaurantId} 맛집 정보 수정 페이지`}
        description="맛집 상세 정보 수정 페이지 "
      />
    </EmotionWrapper>
  );
};

export default PageRestaurantEdit;

const EmotionWrapper = styled.div``;
