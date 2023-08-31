import styled from "@emotion/styled";
import MainHorizontalContainer from "feature/main/components/containers/MainHorizontalContainer";
import { MOCKUP_MAIN_PAGE } from "feature/main/mockup/MockupMainPage";

const MainRecentlyAddedSection = () => {
  return (
    <EmotionWrapper>
      <MainHorizontalContainer title="최근 추가된 맛집" restaurantList={MOCKUP_MAIN_PAGE} />
    </EmotionWrapper>
  );
};

export default MainRecentlyAddedSection;

const EmotionWrapper = styled.section``;
