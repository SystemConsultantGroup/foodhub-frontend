import styled from "@emotion/styled";
import NavbarMenuItem from "components/navbar/components/NavbarMenuItem";
import { NAVBAR_MENU_LIST } from "components/navbar/constants/navbarMenuList";
import { LAYOUT_MARGIN } from "constant/layoutMargin";
import { NAVBAR_HEIGHT } from "constant/navbarHeight";

const Navbar = () => {
  return (
    <EmotionWrapper>
      {NAVBAR_MENU_LIST.map((navbarMenu) => {
        const { label, icon, path } = navbarMenu;

        return <NavbarMenuItem key={label} label={label} icon={icon} path={path} />;
      })}
    </EmotionWrapper>
  );
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
