type TIsNavbarMenuActive = {
  currentPathname: string; // 현재 보여지고 있는 페이지의 pathname
  navbarPathname: string; // navbar 의 각 메뉴의 pathname
};

export const isNavbarMenuActive = ({
  currentPathname,
  navbarPathname,
}: TIsNavbarMenuActive): boolean => {
  // 현재 보여지고 있는 페이지의 pathname 과 navbar 의 각 메뉴의 pathname 이 일치하면 true 를 반환합니다.

  // 메인페이지는 항상 "/" 로 시작하기에 필요한 예외처리
  // 더 좋은 로직이 있다면 교체 바람.
  const isMainPage = currentPathname === "/";
  const isMainPageActive = isMainPage && navbarPathname === "/";
  const isOtherPagesActive = navbarPathname !== "/" && currentPathname.startsWith(navbarPathname);

  const active = isMainPage ? isMainPageActive : isOtherPagesActive;

  return active;
};
