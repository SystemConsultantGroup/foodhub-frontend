import Link from "next/link";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { TNavbarMenu } from "components/navbar/types/TNavbarMenu";

type NavbarMenuItemComponentProps = {
  onClick: (menuIndex: TNavbarMenu["menuIndex"]) => void;
};

type Props = NavbarMenuItemComponentProps & TNavbarMenu;

const NavbarMenuItem = ({ path, label, icon, menuIndex, onClick }: Props) => {
  const { pathname } = useRouter();

  // 메인페이지는 항상 "/" 로 시작하기에 필요한 예외처리
  // 더 좋은 로직이 있다면 교체 바람.
  const isMainPage = pathname === "/";
  const isMainPageActive = isMainPage && path === "/";
  const isOtherPagesActive = path !== "/" && pathname.startsWith(path);

  const active = isMainPage ? isMainPageActive : isOtherPagesActive;

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
  width: 100px;
  height: 60px;
  padding: 10px auto;
  text-decoration: none; // TODO: globalStyles 에서 resetAnchorStyle 머지 후 제거
  color: ${({ theme, active }) => (active ? theme.color.gray700 : theme.color.gray200)};
  stroke: ${({ theme, active }) => (active ? theme.color.gray700 : theme.color.gray200)};

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
