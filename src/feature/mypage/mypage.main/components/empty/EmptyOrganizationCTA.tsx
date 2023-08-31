import styled from "@emotion/styled";
import Button from "components/button/Button";
import IconEmptyOutlined from "components/icons/IconEmptyOutlined";

const EmptyOrganizationCTA = () => {
  return (
    <EmotionWrapper>
      <IconEmptyOutlined />
      <p className="cta-text cta-first-line">가입된 단체가 없네요. 🥲</p>
      <p className="cta-text cta-second-line">가입할 단체를 한번 찾아볼까요?</p>
      <Button>단체 둘러보기</Button>
    </EmotionWrapper>
  );
};

export default EmptyOrganizationCTA;

const EmotionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .cta-first-line {
    margin-top: 24px;
  }

  .cta-second-line {
    margin-top: 8px;
  }

  button {
    margin-top: 36px;
  }
`;
