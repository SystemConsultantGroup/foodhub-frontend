import styled from "@emotion/styled";
import Button from "components/button/Button";
import Checkbox from "components/checkbox/Checkbox";
import AreaInput from "components/inputs/AreaInput/AreaInput";
import TextInput from "components/inputs/TextInput/TextInput";
import { ORGANIZATION_TYPE_CHECKBOX_ITEM_LIST } from "feature/organizations/constants/orgnizationTypeCheckboxItemList";
import { TOrganizationFormValues } from "feature/organizations/types/TOrganizationFormValues";
import { useCallback, useState } from "react";

interface Props {
  isEditMode?: boolean;
}

const OrganizationForm = ({ isEditMode = false }: Props) => {
  const [formValues, setFormValues] = useState<TOrganizationFormValues>({
    name: "",
    type: "STUDENT_ORGANIZATION",
    areaId: 0,
    isPublic: true,
    password: "",
    nickname: "",
  });

  const handleClickSubmit = async () => {
    console.log(formValues);
  };

  const handleSetFormValues = useCallback(
    (key: keyof TOrganizationFormValues) => (value: unknown) => {
      console.log(key, value);
      setFormValues((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleSetOrgName = useCallback(
    (value: unknown, isValid: boolean) => handleSetFormValues("name")(value),
    []
  );

  const handleSetOrgNickname = useCallback(
    (value: unknown, isValid: boolean) => handleSetFormValues("nickname")(value),
    []
  );

  const handleSetOrgAreaId = useCallback(
    (value: unknown) => handleSetFormValues("areaId")(value),
    []
  );

  const { type } = formValues;

  return (
    <EmotionWrapper>
      <h1>{isEditMode ? "단체 정보 수정" : "단체 만들기"}</h1>
      <p className="text-question">1. 내 단체는 어떤 단체인가요?</p>
      <Checkbox.Group
        checkedList={[type]}
        setCheckedItem={handleSetFormValues("type")}
        className="organization-form-item"
      >
        {ORGANIZATION_TYPE_CHECKBOX_ITEM_LIST.map((item) => {
          const { value, name } = item;

          return (
            <Checkbox.Item key={value} value={value}>
              {name}
            </Checkbox.Item>
          );
        })}
      </Checkbox.Group>
      <p className="text-question">2. 단체 이름을 지어보아요!</p>
      <TextInput
        label="단체 이름"
        placeholder="ex) 2학년 1반 미쉐린 평가단"
        name="name"
        onTextChange={handleSetOrgName}
        className="organization-form-item"
      />
      <p className="text-question">3. 나는 이 단체에서 이 이름을 쓸거에요!</p>
      <TextInput
        label="단체에서의 네 닉네임"
        placeholder="ex) 2학년 1반 반장"
        name="nickname"
        onTextChange={handleSetOrgNickname}
        className="organization-form-item"
      />
      <p className="text-question">4. 우리 단체는 이 지역에서 주로 활동합니다!</p>
      <AreaInput label="활동 지역" onSelectValueChange={handleSetOrgAreaId} />

      <Button onClick={handleClickSubmit}>제출하기</Button>
    </EmotionWrapper>
  );
};

export default OrganizationForm;

const EmotionWrapper = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 36px;
    line-height: 1.5;
  }

  p.text-question {
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 18px;
  }

  .organization-form-item {
    margin-bottom: 36px;
  }
`;
