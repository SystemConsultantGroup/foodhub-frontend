import styled from "@emotion/styled";
import IconFork from "components/icons/IconFork";

interface Props {}

const DefaultRestaurantIcon = ({}: Props) => {
  return (
    <EmotionWrapper>
      <IconFork />
    </EmotionWrapper>
  );
};

export default DefaultRestaurantIcon;

const EmotionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.gray100};
  border-radius: 20px;
  width: 40px;
  height: 40px;

  box-shadow: ${({ theme }) => theme.shadow.default};
`;
