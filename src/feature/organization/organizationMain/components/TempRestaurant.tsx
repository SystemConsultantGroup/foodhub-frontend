import styled from "@emotion/styled";

interface Props {
  name?: string;
}

const TempRestaurant: React.FC<Props> = ({ name }) => {
  return <EmotionWrapper>{name}</EmotionWrapper>;
};

export default TempRestaurant;

const EmotionWrapper = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 6px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.gray100};
`;
