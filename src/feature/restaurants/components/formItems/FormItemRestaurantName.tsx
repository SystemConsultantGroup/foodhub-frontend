import { useCallback } from "react";
import styled from "@emotion/styled";
import TextInput from "components/inputs/TextInput/TextInput";
import {
  validateRestaurantNameEmpty,
  validateRestaurantNameLength,
} from "feature/restaurants/functions/validateRestaurantForm";
import { TRestaurantFormCommonProps } from "feature/restaurants/types/TRestaurantFormCommonProps";

interface Props extends TRestaurantFormCommonProps {}

const FormItemRestaurantName: React.FC<Props> = ({ formValues, setFormValues }) => {
  const handleChangeName = useCallback(
    (value: string, isValid: boolean) => {
      setFormValues((prev) => ({
        ...prev,
        name: {
          value,
          isValid,
        },
      }));
    },
    [setFormValues]
  );

  return (
    <EmotionWrapper>
      <TextInput
        label="맛집 이름"
        placeholder="ex) 이모네 떡볶이"
        conditionCheckList={[validateRestaurantNameEmpty, validateRestaurantNameLength]}
        onTextChange={handleChangeName}
      />
    </EmotionWrapper>
  );
};

export default FormItemRestaurantName;

const EmotionWrapper = styled.div``;
