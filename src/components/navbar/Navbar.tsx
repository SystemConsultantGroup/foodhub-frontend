import styled from "@emotion/styled";
import { LAYOUT_MARGIN } from "constant/layoutMargin";
import { NAVBAR_HEIGHT } from "constant/navbarHeight";

const Navbar = () => {
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
  padding: ${LAYOUT_MARGIN};
  padding-bottom: 20px; // iOS 하단바 대응
`;
