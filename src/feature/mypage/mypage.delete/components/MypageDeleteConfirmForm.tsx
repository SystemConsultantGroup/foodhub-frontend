import styled from "@emotion/styled";
import Button from "components/button/Button";
import TextInput from "components/inputs/TextInput/TextInput";
import { validateDeleteConfirmMessage } from "feature/mypage/mypage.delete/functions/validateDeleteConfirmMessage";
import { TTextInputItem } from "feature/mypage/mypage.delete/types/TTextInputItem";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

const MypageDeleteConfirmForm = () => {
  const { push } = useRouter();
  const deleteSuccessLink = "/mypage/delete/success";

  const [confirmFormValues, setConfirmFormValues] = useState<TTextInputItem>({
    value: "",
    isValid: false,
  });

  const handleChangeConfirmValue = useCallback((value: string, isValid: boolean) => {
    setConfirmFormValues({
      value,
      isValid,
    });
  }, []);

  const handleSubmitDeleteAccount = () => {
    // TODO: Modal, toast 등으로 피드백 처리
    if (!confirmFormValues.isValid) {
      alert("탈퇴 메시지를 확인해주세요");
      return;
    }
    // TODO: API 연동 , 여기서 실제 탈퇴 API 호출 후 성공 시 아래 링크로 이동
    push(deleteSuccessLink);
  };

  return (
    <EmotionWrapper>
      <TextInput
        label="아래에 '탈퇴' 라고 입력하세요"
        placeholder="탈퇴"
        onTextChange={handleChangeConfirmValue}
        conditionCheckList={[validateDeleteConfirmMessage]}
      />
      <Button fullWidth onClick={handleSubmitDeleteAccount}>
        탈퇴하기
      </Button>
    </EmotionWrapper>
  );
};

export default MypageDeleteConfirmForm;

const EmotionWrapper = styled.div`
  margin-top: 64px;

  button {
    margin-top: 32px;
    // TODO: danger Button  머지되면 버튼에 danger prop 부여
    background-color: ${({ theme }) => theme.color.danger500};

    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.color.danger600};
    }
  }
`;
