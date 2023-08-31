import styled from "@emotion/styled";

interface Props {
  id?: number;
  imgSrc?: string;
  restaurantName?: string;
  restaurantLocation?: string;
}

const TempRestaurant: React.FC<Props> = ({ restaurantName, restaurantLocation }) => {
  return (
    <EmotionWrapper>
      <p>{restaurantName}</p>
      <p>{restaurantLocation}</p>
    </EmotionWrapper>
  );
};

export default TempRestaurant;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 70px;
  border-radius: 6px;
  padding: 10px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary500};
`;
