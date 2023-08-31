import styled from "@emotion/styled";
import MainBestOrganizationSection from "feature/main/components/section/MainBestOrganizationSection";
import MainGreetingSection from "feature/main/components/section/MainGreetingSection";
import MainRecentlyAddedSection from "feature/main/components/section/MainRecentlyAddedSection";
import MainTopRankingSection from "feature/main/components/section/MainTopRankingSection";

const ViewMainPage = () => {
  return (
    <EmotionWrapper>
      <MainGreetingSection />
      <MainRecentlyAddedSection />
      <MainTopRankingSection />
      <MainBestOrganizationSection />
    </EmotionWrapper>
  );
};

export default ViewMainPage;

const EmotionWrapper = styled.div``;
