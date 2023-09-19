import IconHome from "components/navbar/components/icons/IconHome";
import IconMypage from "components/navbar/components/icons/IconMypage";
import IconOrganization from "components/navbar/components/icons/IconOrganization";
import IconRestaurant from "components/navbar/components/icons/IconRestaurant";
import { TNavbarMenu } from "components/navbar/types/TNavbarMenu";

export const NAVBAR_MENU_LIST: TNavbarMenu[] = [
  {
    menuIndex: 0,
    label: "홈",
    icon: <IconHome />,
    path: "/",
  },
  {
    menuIndex: 1,
    label: "맛집",
    icon: <IconRestaurant />,
    path: "/restaurants",
  },
  {
    menuIndex: 2,
    label: "단체",
    icon: <IconOrganization />,
    path: "/organizations",
  },
  {
    menuIndex: 3,
    label: "마이",
    icon: <IconMypage />,
    path: "/mypage",
  },
];
