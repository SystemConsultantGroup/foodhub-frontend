import styled from "@emotion/styled";
import router from "next/router";
import Button from "components/button/Button";
import {
  ManagementMemberIcon,
  ManagementInfoIcon,
  ManagementRestaurantIcon,
} from "feature/organization/organization.main/components/icons/ButtonIcons";

interface Props {
  organizationId: number;
}

const ManagementButtons: React.FC<Props> = ({ organizationId }) => {
  const handleManagementClick = () => {
    router.push(`/organizations/${organizationId}/edit`);
  };

  const handleRestaurantClick = () => {
    router.push(`/organizations/${organizationId}/restaurants`);
  };

  const handleMemberClick = () => {
    router.push(`/organizations/${organizationId}/members`);
  };

  return (
    <EmotionWrapper>
      <div className="row-1">
        <Button variant="text" icon={<ManagementInfoIcon />} onClick={handleManagementClick}>
          정보 수정
        </Button>
      </div>
      <div className="row-2">
        <Button variant="text" icon={<ManagementRestaurantIcon />} onClick={handleRestaurantClick}>
          맛집 관리
        </Button>
        <Button variant="text" icon={<ManagementMemberIcon />} onClick={handleMemberClick}>
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
