import styled from "@emotion/styled";
import MainRestaurant from "feature/main/components/restaurant/MainRestaurant";

interface Props {
  title: string;
}

const MainHorizontalContainer = ({ title }: Props) => {
  return (
    <EmotionWrapper>
      <h2>{title}</h2>
      <div className="restaurant-container">
        <MainRestaurant />
        <MainRestaurant />
        <MainRestaurant />
        <MainRestaurant />
      </div>
    </EmotionWrapper>
  );
};

export default MainHorizontalContainer;

const EmotionWrapper = styled.div`
  padding-top: 16px;
  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: -32px;
  }

  .restaurant-container {
    display: flex;
    column-gap: 16px;
    overflow-x: auto;
    padding: 32px 40px;
    margin-top: 16px;
    margin-left: -40px;
    margin-right: -40px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
