import styled from "@emotion/styled";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  menuName: string;
  onClick: () => void;
}

const PopoverMemberItem = ({ icon, menuName, onClick }: Props) => {
  return (
    <EmotionWrapper onClick={onClick}>
      <div className="menu-item">
        {icon}
        <span className="menu-name">{menuName}</span>
      </div>
    </EmotionWrapper>
  );
};

export default PopoverMemberItem;

const EmotionWrapper = styled.button`
  padding: 8px 10px;

  .menu-item {
    display: flex;
    align-items: center;
    column-gap: 8px;
    cursor: pointer;

    .menu-name {
      font-size: 12px;
      font-weight: 400;
      color: ${({ theme }) => theme.color.gray700};

      white-space: nowrap;
    }
  }
`;
