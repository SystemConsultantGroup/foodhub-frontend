import styled from "@emotion/styled";
import { TNavbarMenu } from "components/navbar/types/TNavbarMenu";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarMenuItem = ({ path, label, icon }: TNavbarMenu) => {
  const { pathname } = useRouter();
  const active = pathname === path;

  return (
    <EmotionWrapper active={active} href={path}>
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
