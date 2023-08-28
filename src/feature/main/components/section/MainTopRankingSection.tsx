import styled from "@emotion/styled";
import MainHorizontalContainer from "feature/main/components/containers/MainHorizontalContainer";
import { MOCKUP_MAIN_PAGE } from "feature/main/mockup/MockupMainPage";

const MainTopRankingSection = () => {
  return (
    <EmotionWrapper>
      <MainHorizontalContainer title="평점이 높은 맛집" restaurantList={MOCKUP_MAIN_PAGE} />
    </EmotionWrapper>
  );
};

export default MainTopRankingSection;

const EmotionWrapper = styled.section``;
