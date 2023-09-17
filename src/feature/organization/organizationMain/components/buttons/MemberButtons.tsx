import styled from "@emotion/styled";
import router from "next/router";
import Button from "components/button/Button";
import { MembersIcon } from "feature/organization/organizationMain/components/icons/ButtonIcons";

interface Props {
  organizationId: string | number | string[];
}

const MemberButtons: React.FC<Props> = ({ organizationId }) => {
  const handleOnClick = () => {
    router.push(`/organizations/${organizationId}/member`);
  };
  return (
    <EmotionWrapper>
      <Button variant="text" icon={<MembersIcon />} onClick={handleOnClick}>
        멤버 조회
      </Button>
    </EmotionWrapper>
  );
};

export default MemberButtons;

const EmotionWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;

  margin: 20px 10px;
`;
