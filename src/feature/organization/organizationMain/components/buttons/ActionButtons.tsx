import styled from "@emotion/styled";
import Button from "components/button/Button";

interface Props {
  organizationId: string | number | string[];
}

const ActionButtons: React.FC<Props> = ({ organizationId }) => {
  return (
    <EmotionWrapper>
      <Button variant="primary" fullWidth>
        투표 바로가기
      </Button>
      <Button variant="primary" fullWidth>
        맛집 추가하기
      </Button>
    </EmotionWrapper>
  );
};

export default ActionButtons;

const EmotionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  margin: 15px 10px;

  button {
    height: auto;
  }
`;
