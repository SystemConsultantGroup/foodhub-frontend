import styled from "@emotion/styled";
import Button from "components/button/Button";
import Dropdown from "components/dropdown/Dropdown";
import TextInput from "components/inputs/TextInput/TextInput";
import { GENDER_DROPDOWN_VALUE_LIST } from "feature/mypage/mypage.edit/constants/GenderDropdownValueList";
import { MOCKUP_MYPAGE_INITIAL_VALUES } from "feature/mypage/common/mockup/MockupMypage";
import { TMypageFormValues } from "feature/mypage/mypage.edit/types/TMypageFormValues";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const { Option } = Dropdown;

const ViewMypageEdit = () => {
  const [formValues, setFormValues] = useState<TMypageFormValues>({
    nickname: { value: "", isValid: false },
    introduction: { value: "", isValid: false },
    birthYear: { value: "", isValid: false },
    gender: { value: "", isValid: false },
  });

  const handleChangeInput = useCallback(
    (name: string) => (value: string, isValid: boolean) => {
      setFormValues((prev) => ({
        ...prev, // TODO: ... 연산자가 1레벨까지만 복사한다는 것을 기억하자.
        [name]: { value, isValid },
      }));
    },
    []
  );

  const handleChangeNickname = useCallback(handleChangeInput("nickname"), []);
  const handleChangeDescription = useCallback(handleChangeInput("introduction"), []);

  const { nickname, introduction, gender } = formValues;
  const deleteUserAccountLink = "/mypage/delete";

  // TODO: 서버 데이터 받아오는 작업 모킹
  useEffect(() => {
    const nextFormValues = {} as TMypageFormValues;

    Object.keys(MOCKUP_MYPAGE_INITIAL_VALUES).forEach((key) => {
      const value = MOCKUP_MYPAGE_INITIAL_VALUES[key as keyof TMypageFormValues];

      nextFormValues[key as keyof TMypageFormValues] = {
        value,
        isValid: true,
      };
    });
    setFormValues(nextFormValues);
  }, []);

  return (
    <EmotionWrapper>
      <div className="input-container">
        <TextInput
          name="nickname"
          value={nickname.value}
          label="닉네임"
          placeholder="변경할 닉네임을 입력해주세요!"
          onTextChange={handleChangeNickname}
        />
        <TextInput
          name="introduction"
          value={introduction.value}
          label="한줄 자기소개"
          placeholder="자기소개를 입력해주세요!"
          onTextChange={handleChangeDescription}
        />
        <div>이 자리에 생년월일을 고르는 DatePicker 가 들어갈 예정입니다.</div>
        {/* TODO => placeholder 가 적용되지 않는 문제 핵결*/}
        <Dropdown label="성별" placeholder="성별을 선택해주세요!" value={gender.value}>
          {GENDER_DROPDOWN_VALUE_LIST.map(({ value, label }) => (
            <Option key={value} value={value}>
              <span>{label}</span>
            </Option>
          ))}
        </Dropdown>
      </div>
      <Button fullWidth className="button-save">
        저장하기
      </Button>
      <Link className="button-remove-account" href={deleteUserAccountLink}>
        탈퇴하기
      </Link>
    </EmotionWrapper>
  );
};

export default ViewMypageEdit;

const EmotionWrapper = styled.div`
  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 32px;
  }

  .button-save {
    margin-top: 32px;
  }

  .button-remove-account {
    float: right;
    font-size: 12px;
    margin-top: 100px;
    color: ${({ theme }) => theme.color.danger400};
  }
`;
