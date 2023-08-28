import styled from "@emotion/styled";
import MainHorizontalContainer from "feature/main/components/containers/MainHorizontalContainer";

const MainRecentlyAddedSection = () => {
  return (
    <EmotionWrapper>
      <MainHorizontalContainer title="최근 추가된 맛집" />
    </EmotionWrapper>
  );
};

export default MainRecentlyAddedSection;

const EmotionWrapper = styled.section``;
