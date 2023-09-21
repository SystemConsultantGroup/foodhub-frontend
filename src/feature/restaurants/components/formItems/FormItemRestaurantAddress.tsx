import styled from "@emotion/styled";
import TextInput from "components/inputs/TextInput/TextInput";
import { validateRestaurantAddressLength } from "feature/restaurants/functions/validateRestaurantForm";
import { TRestaurantFormCommonProps } from "feature/restaurants/types/TRestaurantFormCommonProps";
import { useCallback } from "react";

interface Props extends TRestaurantFormCommonProps {}

const FormItemRestaurantAddress: React.FC<Props> = ({ setFormValues }) => {
  const handleChangeName = useCallback(
    (value: string, isValid: boolean) => {
      setFormValues((prev) => ({
        ...prev,
        address: {
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
        label="맛집 주소"
        placeholder="간단한 주소를 입력해주세요. ex) 도평건물 1층"
        conditionCheckList={[validateRestaurantAddressLength]}
        onTextChange={handleChangeName}
      />
    </EmotionWrapper>
  );
};

export default FormItemRestaurantAddress;

const EmotionWrapper = styled.div``;
