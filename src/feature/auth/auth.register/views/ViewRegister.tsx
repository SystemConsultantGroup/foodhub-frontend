import styled from "@emotion/styled";
import Button from "components/button/Button";
import TextInput from "components/inputs/TextInput/TextInput";
import { LINK_REGISTER_SUCCESS } from "constant/link";
import {
  NICKNAME_LENGTH_LIMIT_MAX,
  NICKNAME_LENGTH_LIMIT_MIN,
} from "feature/auth/auth.register/constants/nicknameLengthLimit";
import { validateNicknameLength } from "feature/auth/auth.register/functions/validateNicknameLength";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

const ViewRegister = () => {
  const { push } = useRouter();
  const [foodhubNickname, setFoodhubNickname] = useState({
    value: "",
    isValid: false,
  });

  const registerSuccessLink = LINK_REGISTER_SUCCESS;

  const handleFoodhubNicknameChange = useCallback((value: string, isValid: boolean) => {
    setFoodhubNickname({
      value,
      isValid,
    });
  }, []);

  const handleRegisterFoodhub = () => {
    if (!foodhubNickname.isValid) {
      alert("닉네임을 확인해주세요."); // TODO: 모달 머지 후 모달로 변경
      return;
    }
    // TODO: API 연동 , foodhubNickname.value 를 이용하여 닉네임 등록
    // 성공 시 가입 성공 페이지로 이동
    push(registerSuccessLink);
  };

  const messageOnErrorNicknameLength = `닉네임은 ${NICKNAME_LENGTH_LIMIT_MIN}자 이상 ${NICKNAME_LENGTH_LIMIT_MAX}자 이하로 입력해주세요.`;
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
        conditionCheckList={[
          { condition: validateNicknameLength, messageOnError: messageOnErrorNicknameLength },
        ]}
      />
      {/* TODO: 각 공통 컴포넌트들이 className 을 받을 수 있게 된 후로 제거 */}
      <div className="space" />
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

  .space {
    height: 64px;
  }
`;
