import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";
import { useRouter } from "next/router";

const PageRestaurantRemoveConfirm = () => {
  const { query } = useRouter();
  const restaurantId = query.restaurantId ?? 0;

  return (
    <EmotionWrapper>
      <PageMarker
        title={`${restaurantId} 맛집 삭제 컨펌 페이지`}
        description="맛집 삭제 컨펌 페이지 "
      />
    </EmotionWrapper>
  );
};

export default PageRestaurantRemoveConfirm;

const EmotionWrapper = styled.div``;
