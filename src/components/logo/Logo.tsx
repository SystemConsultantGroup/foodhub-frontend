import styled from "@emotion/styled";

const Logo = () => {
  return (
    <EmotionWrapper>
      <h1>쩝쩝대학</h1>
      <p>우리들의 모든 맛집</p>
    </EmotionWrapper>
  );
};

export default Logo;

const EmotionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-size: 12px;
    color: ${({ theme }) => theme.color.gray500};
  }
`;
