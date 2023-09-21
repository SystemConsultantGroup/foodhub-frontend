import { useCallback } from "react";
import styled from "@emotion/styled";
import TextInput from "components/inputs/TextInput/TextInput";
import { TRestaurantFormCommonProps } from "feature/restaurants/types/TRestaurantFormCommonProps";

interface Props extends TRestaurantFormCommonProps {}

const FormItemRestaurantOpeningHour: React.FC<Props> = ({ setFormValues }) => {
  const handleChangeOpeningHour = useCallback(
    (value: string, isValid: boolean) => {
      setFormValues((prev) => ({
        ...prev,
        openingHour: {
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
        label="맛집 운영 시간"
        placeholder="ex) 아침 10시 - 저녁 9시"
        onTextChange={handleChangeOpeningHour}
      />
    </EmotionWrapper>
  );
};

export default FormItemRestaurantOpeningHour;

const EmotionWrapper = styled.div``;
