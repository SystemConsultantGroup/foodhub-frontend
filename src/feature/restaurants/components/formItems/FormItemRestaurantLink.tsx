import { useCallback } from "react";
import styled from "@emotion/styled";
import TextInput from "components/inputs/TextInput/TextInput";
import { TRestaurantFormCommonProps } from "feature/restaurants/types/TRestaurantFormCommonProps";

interface Props extends TRestaurantFormCommonProps {}

const FormItemRestaurantLink: React.FC<Props> = ({ setFormValues }) => {
  const handleChangeLink = useCallback(
    (value: string, isValid: boolean) => {
      setFormValues((prev) => ({
        ...prev,
        link: {
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
        label="외부 링크 추가"
        placeholder="네이버 플레이스, 카카오맵, 배달의민족 링크 등"
        onTextChange={handleChangeLink}
      />
    </EmotionWrapper>
  );
};

export default FormItemRestaurantLink;

const EmotionWrapper = styled.div``;
