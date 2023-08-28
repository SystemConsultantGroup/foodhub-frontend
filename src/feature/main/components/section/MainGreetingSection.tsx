import styled from "@emotion/styled";
import TypographyMain from "feature/main/components/typography/TypographyMain";

const MainGreetingSection = () => {
  const nickName = "김코딩";

  return (
    <EmotionWrapper>
      <TypographyMain>안녕하세요 {nickName}님, 😃</TypographyMain>
      <TypographyMain>오늘은 어떤 맛집을 찾으시나요?</TypographyMain>
    </EmotionWrapper>
  );
};

export default MainGreetingSection;

const EmotionWrapper = styled.section``;
