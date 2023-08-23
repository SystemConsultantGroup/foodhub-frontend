import styled from "@emotion/styled";
import Button from "components/button/Button";
import {
  ManagementMemberIcon,
  ManagementInfoIcon,
  ManagementRestaurantIcon,
} from "feature/organization/organizationMain/components/ButtonIcons";

interface Props {
  organizationId: string | number | string[];
}

const ManagementButtons: React.FC<Props> = ({ organizationId }) => {
  return (
    <EmotionWrapper>
      <div className="row-1">
        <Button variant="text" icon={<ManagementInfoIcon />}>
          정보 수정
        </Button>
      </div>
      <div className="row-2">
        <Button variant="text" icon={<ManagementRestaurantIcon />}>
          맛집 관리
        </Button>
        <Button variant="text" icon={<ManagementMemberIcon />}>
          멤버 관리
        </Button>
      </div>
    </EmotionWrapper>
  );
};

export default ManagementButtons;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  gap: 8px;

  margin: 20px 10px;

  .row-1 {
    display: flex;
    justify-content: right;
  }

  .row-2 {
    display: flex;
    justify-content: right;
    align-items: right;
    gap: 8px;
  }
`;
