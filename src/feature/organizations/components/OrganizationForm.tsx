import styled from "@emotion/styled";
import Button from "components/button/Button";
import Checkbox from "components/checkbox/Checkbox";
import AreaInput from "components/inputs/AreaInput/AreaInput";
import ImageInput from "components/inputs/ImageInput/ImageInput";
import TextInput from "components/inputs/TextInput/TextInput";
import { ORGANIZATION_IMAGE_MAX_COUNT } from "constant/limit";
import { ORGANIZATION_TYPE_CHECKBOX_ITEM_LIST } from "feature/organizations/constants/orgnizationTypeCheckboxItemList";
import {
  validateOrganizationNameEmpty,
  validateOrganizationNameLength,
  validateOrganizationNicknameEmpty,
  validateOrganizationNicknameLength,
  validateOrganizationPasswordEmpty,
  validateOrganizationPasswordLength,
} from "feature/organizations/functions/validateOrganizationForm";
import { MOCKUP_ORGANIZATION_INITIAL_DATA } from "feature/organizations/mockups/mockupOrganiationInitialData";
import { TOrganizationFormValues } from "feature/organizations/types/TOrganizationFormValues";
import { useCallback, useEffect, useState } from "react";

type TCustomFormTarget = {
  imageInput: { files: FileList };
  imageUrlInput: { value: string };
};

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

  const handleClickSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & TCustomFormTarget;

    console.log("submit");
    console.log(formValues);

    console.log(target.imageInput.files);
    console.log(target.imageUrlInput.value);
  };

  const handleSetFormValues = useCallback(
    (key: keyof TOrganizationFormValues) => (value: unknown) => {
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

  const handleSetOrgPassword = useCallback(
    (value: unknown, isValid: boolean) => handleSetFormValues("password")(value),
    []
  );

  const handleSetIsPublic = useCallback((value: unknown) => {
    const isPublicBoolean = value === "true";
    setFormValues((prev) => ({
      ...prev,
      ["isPublic" as keyof TOrganizationFormValues]: isPublicBoolean,
    }));
  }, []);

  const { type, isPublic, name, password, nickname, areaId } = formValues;
  const organizationImageSrc = null; // 서버에서 받아온 단체 프로필 이미지
  const existingImageUrlList = organizationImageSrc ? [organizationImageSrc] : [];

  // 데이터 fetching 로직이 들어올 시 비동기적으로 form values 를 업데이트 해야함
  useEffect(() => {
    if (isEditMode) setFormValues(MOCKUP_ORGANIZATION_INITIAL_DATA);
  }, [isEditMode]);

  return (
    <EmotionWrapper onSubmit={handleClickSubmit}>
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
        conditionCheckList={[validateOrganizationNameLength, validateOrganizationNameEmpty]}
        value={name}
      />
      <p className="text-question">3. 나는 이 단체에서 이 이름을 쓸거에요!</p>
      <TextInput
        label="단체에서의 네 닉네임"
        placeholder="ex) 2학년 1반 반장"
        name="nickname"
        onTextChange={handleSetOrgNickname}
        className="organization-form-item"
        conditionCheckList={[validateOrganizationNicknameLength, validateOrganizationNicknameEmpty]}
        value={nickname}
      />
      <p className="text-question">4. 우리 단체는 이 지역에서 주로 활동합니다!</p>
      <AreaInput
        label="활동 지역"
        onSelectValueChange={handleSetOrgAreaId}
        className="organization-form-item"
        value={areaId}
      />
      <p className="text-question">5. 우리 단체를 대표하는 이미지를 설정해보세요!</p>
      <ImageInput
        maxImageCount={ORGANIZATION_IMAGE_MAX_COUNT}
        existingImageUrlList={existingImageUrlList}
        className="organization-form-item"
      />

      <p className="text-question">6. 단체를 비공개로 설정할 수 있어요!</p>
      <Checkbox.Group
        checkedList={[String(isPublic)]}
        setCheckedItem={(value) => handleSetIsPublic(value)}
        className="organization-form-item"
      >
        <Checkbox.Item value="true">공개</Checkbox.Item>
        <Checkbox.Item value="false">비공개</Checkbox.Item>
      </Checkbox.Group>

      <div className="set-password-container" data-ispublic={!!isPublic}>
        <p className="text-question">7. 비밀번호를 설정해 보아요!</p>
        <TextInput
          type="password"
          label="비밀번호"
          value={password}
          placeholder="비밀번호를 입력해주세요"
          name="password"
          onTextChange={handleSetOrgPassword}
          className="organization-form-item"
          conditionCheckList={[
            validateOrganizationPasswordLength,
            validateOrganizationPasswordEmpty,
          ]}
        />
      </div>

      <Button type="submit">단체 만들기</Button>
    </EmotionWrapper>
  );
};

export default OrganizationForm;

const EmotionWrapper = styled.form`
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

  .set-password-container {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;

    &[data-ispublic="false"] {
      max-height: 1000px;
    }
  }

  button {
    float: right;
  }
`;
