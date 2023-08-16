import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";

const PageRestaurantList = () => {
  return (
    <EmotionWrapper>
      <PageMarker
        title="전체 맛집 리스트 페이지"
        description="맛집을 지역별로, 평점별로 나누어 볼 수 있는 페이지"
      />
    </EmotionWrapper>
  );
};

export default PageRestaurantList;

const EmotionWrapper = styled.div``;
