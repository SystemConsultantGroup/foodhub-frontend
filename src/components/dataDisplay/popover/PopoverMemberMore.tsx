import styled from "@emotion/styled";
import PopoverMemberItem from "components/dataDisplay/popover/PopoverMemberItem";
import IconTrash from "components/icons/IconTrash";
import IconUserEdit from "components/icons/IconUserEdit";

interface Props {}

const PopoverMemberMore = ({}: Props) => {
  const handleClickUserEdit = () => {
    alert("관리자로 승급");
  };

  const handleClickTrash = () => {
    alert("멤버 삭제");
  };

  return (
    <EmotionWrapper>
      <PopoverMemberItem
        icon={<IconUserEdit />}
        menuName="관리자로 승급"
        onClick={handleClickUserEdit}
      />
      <PopoverMemberItem icon={<IconTrash />} menuName="멤버 삭제" onClick={handleClickTrash} />
    </EmotionWrapper>
  );
};

export default PopoverMemberMore;

const EmotionWrapper = styled.div`
  filter: drop-shadow(0px 0px 4px ${({ theme }) => theme.color.primary500});

  /* border: 1px solid ${({ theme }) => theme.color.primary500}; */
  /* box-shadow: ${({ theme }) => theme.shadow.default}; */
  position: absolute;
  top: 40px;
  right: 0px;

  display: flex;
  background-color: ${({ theme }) => theme.color.white};
  flex-direction: column;
  border-radius: 6px;
`;
