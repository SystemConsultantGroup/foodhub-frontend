import Link from "next/link";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { TNavbarMenu } from "components/navbar/types/TNavbarMenu";
import { isNavbarMenuActive } from "components/navbar/functions/isNavbarMenuActive";

type NavbarMenuItemComponentProps = {
  onClick: (menuIndex: TNavbarMenu["menuIndex"]) => void;
};

type Props = NavbarMenuItemComponentProps & TNavbarMenu;

const NavbarMenuItem = ({ path, label, icon, menuIndex, onClick }: Props) => {
  const { pathname } = useRouter();

  const active = isNavbarMenuActive({
    currentPathname: pathname,
    navbarPathname: path,
  });

  return (
    <EmotionWrapper
      active={active}
      href={path}
      onClick={() => {
        onClick(menuIndex);
      }}
    >
      {icon}
      <p className="menu-item-name">{label}</p>
    </EmotionWrapper>
  );
};

export default NavbarMenuItem;

const EmotionWrapper = styled(Link)<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60px;
  padding: 10px auto;
  text-decoration: none; // TODO: globalStyles 에서 resetAnchorStyle 머지 후 제거
  color: ${({ theme, active }) => (active ? theme.color.gray700 : theme.color.gray200)};
  stroke: ${({ theme, active }) => (active ? theme.color.gray700 : theme.color.gray200)};

  ${({ theme }) => theme.device.fold} {
    width: 60px;
  }

  &:hover {
    color: ${({ theme }) => theme.color.gray500};
    stroke: ${({ theme }) => theme.color.gray500};
  }

  transition:
    color 0.2s ease-in-out,
    stroke 0.2s ease-in-out;

  svg {
    path {
      stroke: inherit;
    }
  }
`;
