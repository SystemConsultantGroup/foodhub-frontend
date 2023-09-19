import styled from "@emotion/styled";
import TextInput from "components/inputs/TextInput/TextInput";
import { RESTAURANT_CAPACITY_MAX_VALUE, RESTAURANT_CAPACITY_MIN_VALUE } from "constant/limit";
import {
  validateRestaurantCapacityMin,
  validateRestaurantCapacityMax,
} from "feature/restaurants/functions/validateRestaurantForm";
import { TRestaurantFormCommonProps } from "feature/restaurants/types/TRestaurantFormCommonProps";
import { useCallback } from "react";

interface Props extends TRestaurantFormCommonProps {}

const FormItemRestaurantCapacity: React.FC<Props> = ({ setFormValues }) => {
  const handleChangeCapacity = useCallback(
    (value: string, isValid: boolean) => {
      setFormValues((prev) => ({
        ...prev,
        capacity: {
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
        min={RESTAURANT_CAPACITY_MIN_VALUE}
        max={RESTAURANT_CAPACITY_MAX_VALUE}
        label="맛집 최대 수용 인원"
        type="number"
        placeholder="맛집 최대 수용 인원을 입력해주세요."
        conditionCheckList={[validateRestaurantCapacityMin, validateRestaurantCapacityMax]}
        onTextChange={handleChangeCapacity}
      />
    </EmotionWrapper>
  );
};

export default FormItemRestaurantCapacity;

const EmotionWrapper = styled.div``;
