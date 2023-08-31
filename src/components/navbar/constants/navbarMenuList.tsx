import IconHome from "components/navbar/components/icons/IconHome";
import IconMypage from "components/navbar/components/icons/IconMypage";
import IconOrganization from "components/navbar/components/icons/IconOrganization";
import IconRestaurant from "components/navbar/components/icons/IconRestaurant";
import { TNavbarMenu } from "components/navbar/types/TNavbarMenu";

export const NAVBAR_MENU_LIST: TNavbarMenu[] = [
  {
    label: "홈",
    icon: <IconHome />,
    path: "/",
  },
  {
    label: "맛집",
    icon: <IconRestaurant />,
    path: "/restaurants",
  },
  {
    label: "단체",
    icon: <IconOrganization />,
    path: "/organizations",
  },
  {
    label: "마이",
    icon: <IconMypage />,
    path: "/mypage",
  },
];
