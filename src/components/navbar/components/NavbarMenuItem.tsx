import styled from "@emotion/styled";
import { TNavbarMenu } from "components/navbar/types/TNavbarMenu";

const NavbarMenuItem = ({ path, label, icon }: TNavbarMenu) => {
  return (
    <EmotionWrapper>
      {icon}
      <p className="menu-item-name">{label}</p>
    </EmotionWrapper>
  );
};

export default NavbarMenuItem;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 10px auto;

  .menu-item-name {
    color: ${({ theme }) => theme.color.gray200};
  }
`;
