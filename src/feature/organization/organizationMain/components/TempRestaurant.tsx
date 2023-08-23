import styled from "@emotion/styled";

interface Props {}

const TempRestaurant: React.FC<Props> = ({}) => {
  return <EmotionWrapper></EmotionWrapper>;
};

export default TempRestaurant;

const EmotionWrapper = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.gray100};
`;
