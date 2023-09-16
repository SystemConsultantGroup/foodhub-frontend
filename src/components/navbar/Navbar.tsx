import styled from "@emotion/styled";
import NavbarMenuItem from "components/navbar/components/NavbarMenuItem";
import NavbarSliderIndicator from "components/navbar/components/NavbarSliderIndicator";
import { NAVBAR_MENU_LIST } from "components/navbar/constants/navbarMenuList";
import { TNavbarMenu } from "components/navbar/types/TNavbarMenu";
import { LAYOUT_MARGIN } from "constant/layoutMargin";
import { NAVBAR_HEIGHT } from "constant/navbarHeight";
import { useState } from "react";

const Navbar = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);

  const handleClickNavbarMenuItem = (menuIndex: TNavbarMenu["menuIndex"]) => {
    setActiveMenuIndex(menuIndex);
  };

  return (
    <EmotionWrapper>
      <nav>
        <NavbarSliderIndicator activeMenuIndex={activeMenuIndex} />
        {NAVBAR_MENU_LIST.map((navbarMenu) => {
          const { label, icon, path, menuIndex } = navbarMenu;

          return (
            <NavbarMenuItem
              key={label}
              label={label}
              icon={icon}
              path={path}
              menuIndex={menuIndex}
              onClick={handleClickNavbarMenuItem}
            />
          );
        })}
      </nav>
    </EmotionWrapper>
  );
};

export default Navbar;

const EmotionWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray100};
  height: ${NAVBAR_HEIGHT}px;
  padding: ${LAYOUT_MARGIN};
  padding-bottom: 20px; // iOS 하단바 대응
  display: flex;
  justify-content: center;

  nav {
    position: relative;
    display: flex;
  }
`;
