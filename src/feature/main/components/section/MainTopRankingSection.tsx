import styled from "@emotion/styled";
import MainHorizontalContainer from "feature/main/components/containers/MainHorizontalContainer";

const MainTopRankingSection = () => {
  return (
    <EmotionWrapper>
      <MainHorizontalContainer title="평점이 높은 맛집" />
    </EmotionWrapper>
  );
};

export default MainTopRankingSection;

const EmotionWrapper = styled.section``;
