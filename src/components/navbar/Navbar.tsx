import styled from "@emotion/styled";
import { NAVBAR_HEIGHT } from "constant/navbarHeight";

interface Props {}

const Navbar = ({}: Props) => {
  return <EmotionWrapper>Navbar</EmotionWrapper>;
};

export default Navbar;

const EmotionWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray100};
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;
  padding: 10px 0;
  padding-bottom: 20px; // iOS 하단바 대응
`;
