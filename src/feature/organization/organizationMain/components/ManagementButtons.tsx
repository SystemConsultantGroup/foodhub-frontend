import styled from "@emotion/styled";
import Button from "components/button/Button";

interface Props {
  organizationId: string | number | string[];
}

/*
variant?: "primary" | "secondary" | "text"; // color types
  icon?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
*/

const ManagementButtons: React.FC<Props> = ({ organizationId }) => {
  return (
    <EmotionWrapper>
      <Button variant="primary">맛집 관리</Button>
      <Button variant="text">멤버 관리</Button>
      <Button variant="text">단체 정보 수정</Button>
    </EmotionWrapper>
  );
};

export default ManagementButtons;

const EmotionWrapper = styled.div``;
