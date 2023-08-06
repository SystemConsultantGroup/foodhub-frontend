import styled from "@emotion/styled";

interface Props {}

const Header = ({}: Props) => {
  return <EmotionWrapper>Header</EmotionWrapper>;
};

export default Header;

const EmotionWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.color.gray100};
`;
