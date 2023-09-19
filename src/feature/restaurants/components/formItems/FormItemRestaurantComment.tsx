import styled from "@emotion/styled";
import TextInput from "components/inputs/TextInput/TextInput";
import { validateRestaurantCommentLength } from "feature/restaurants/functions/validateRestaurantForm";
import { TRestaurantFormCommonProps } from "feature/restaurants/types/TRestaurantFormCommonProps";
import { useCallback } from "react";

interface Props extends TRestaurantFormCommonProps {}

const FormItemRestaurantComment: React.FC<Props> = ({ setFormValues }) => {
  const handleChangeName = useCallback(
    (value: string, isValid: boolean) => {
      setFormValues((prev) => ({
        ...prev,
        comment: {
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
        label="맛집 한줄평"
        placeholder="ex) 떡볶이가 정말 맛있어요!"
        conditionCheckList={[validateRestaurantCommentLength]}
        onTextChange={handleChangeName}
      />
    </EmotionWrapper>
  );
};

export default FormItemRestaurantComment;

const EmotionWrapper = styled.div``;
