import styled from "@emotion/styled";
import Button from "components/button/Button";
import { RegisterIcon } from "feature/organization/organizationMain/components/icons/ButtonIcons";

interface Props {
  organizationId: string | number;
}

const VisitorButtons: React.FC<Props> = ({ organizationId }) => {
  return (
    <EmotionWrapper>
      <Button variant="text" icon={<RegisterIcon />}>
        이 단체에 가입하기
      </Button>
    </EmotionWrapper>
  );
};

export default VisitorButtons;

const EmotionWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;

  margin: 20px 10px;
`;
