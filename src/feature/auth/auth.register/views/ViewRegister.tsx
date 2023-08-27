import styled from "@emotion/styled";
import Button from "components/button/Button";
import TextInput from "components/inputs/TextInput/TextInput";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

const ViewRegister = () => {
  const { push } = useRouter();
  const [foodhubNickname, setFoodhubNickname] = useState({
    value: "",
    isValid: false,
  });

  const registerSuccessLink = "/register/success";

  const handleFoodhubNicknameChange = useCallback((value: string, isValid: boolean) => {
    setFoodhubNickname({
      value,
      isValid,
    });
  }, []);

  const handleRegisterFoodhub = () => {
    // TODO: API 연동 , foodhubNickname.value 를 이용하여 닉네임 등록
    // 성공 시 가입 성공 페이지로 이동
    push(registerSuccessLink);
  };

  const kakaoName = "홍길동"; // TODO: API 에서 받아오는 닉네임으로 변경
  return (
    <EmotionWrapper>
      <p className="greeting">안녕하세요 {kakaoName}님, 👋</p>
      <p className="instruction">푸드허브에서 사용할 닉네임을 설정해주세요!</p>

      <TextInput
        label="닉네임"
        placeholder="닉네임을 설정해주세요!"
        value={foodhubNickname.value}
        onTextChange={handleFoodhubNicknameChange}
      />
      <Button fullWidth onClick={handleRegisterFoodhub}>
        가입하기
      </Button>
    </EmotionWrapper>
  );
};

export default ViewRegister;

const EmotionWrapper = styled.div`
  p.greeting {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    line-height: 1.5;
  }

  p.instruction {
    margin-bottom: 64px;
  }

  button {
    margin-top: 64px;
  }
`;
