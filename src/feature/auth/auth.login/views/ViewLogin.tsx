import styled from "@emotion/styled";
import Logo from "components/logo/Logo";
import ButtonKakaoLogin from "feature/auth/auth.login/components/ButtonKakaoLogin";

const ViewLogin = () => {
  return (
    <EmotionWrapper>
      <Logo />
      <ButtonKakaoLogin />
    </EmotionWrapper>
  );
};

export default ViewLogin;

const EmotionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-top: 100px;

  a {
    display: block;
    margin-top: 120px;
  }
`;
