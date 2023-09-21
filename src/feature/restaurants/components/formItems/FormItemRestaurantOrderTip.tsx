import { useCallback } from "react";
import styled from "@emotion/styled";
import TextInput from "components/inputs/TextInput/TextInput";
import { TRestaurantFormCommonProps } from "feature/restaurants/types/TRestaurantFormCommonProps";

interface Props extends TRestaurantFormCommonProps {}

const FormItemRestaurantOrderTip: React.FC<Props> = ({ setFormValues }) => {
  const handleChangeOrderTip = useCallback(
    (value: string, isValid: boolean) => {
      setFormValues((prev) => ({
        ...prev,
        orderTip: {
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
        label="주문 팁"
        placeholder="ex) 배달 주문 시 떡은 꼭 잘라달라 해야 해요!"
        onTextChange={handleChangeOrderTip}
      />
    </EmotionWrapper>
  );
};

export default FormItemRestaurantOrderTip;

const EmotionWrapper = styled.div``;
