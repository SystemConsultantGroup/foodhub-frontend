import styled from "@emotion/styled";
import Checkbox from "components/checkbox/Checkbox";
import { ORGANIZATION_TYPE_CHECKBOX_ITEM_LIST } from "feature/organizations/constants/orgnizationTypeCheckboxItemList";
import { TOrganizationFormValues } from "feature/organizations/types/TOrganizationFormValues";
import { useState } from "react";

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

  const handleSetFormValues = (key: keyof TOrganizationFormValues) => (value: unknown) => {
    console.log(key, value);
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const { type } = formValues;

  return (
    <EmotionWrapper>
      <p className="text-question">내 단체는 어떤 단체인가요?</p>
      <Checkbox.Group checkedList={[type]} setCheckedItem={handleSetFormValues("type")}>
        {ORGANIZATION_TYPE_CHECKBOX_ITEM_LIST.map((item) => {
          const { value, name } = item;

          return (
            <Checkbox.Item key={value} value={value}>
              {name}
            </Checkbox.Item>
          );
        })}
      </Checkbox.Group>
    </EmotionWrapper>
  );
};

export default OrganizationForm;

const EmotionWrapper = styled.div`
  p.text-question {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 18px;
  }
`;
