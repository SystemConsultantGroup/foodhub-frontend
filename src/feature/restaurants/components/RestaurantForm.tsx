import styled from "@emotion/styled";
import Button from "components/button/Button";
import FormItemRestaurantAddress from "feature/restaurants/components/formItems/FormItemRestaurantAddress";
import FormItemRestaurantCapacity from "feature/restaurants/components/formItems/FormItemRestaurantCapacity";
import FormItemRestaurantCategoryId from "feature/restaurants/components/formItems/FormItemRestaurantCategoryId";
import FormItemRestaurantComment from "feature/restaurants/components/formItems/FormItemRestaurantComment";
import FormItemRestaurantDelivery from "feature/restaurants/components/formItems/FormItemRestaurantDelivery";
import FormItemRestaurantImages from "feature/restaurants/components/formItems/FormItemRestaurantImages";
import FormItemRestaurantLink from "feature/restaurants/components/formItems/FormItemRestaurantLink";
import FormItemRestaurantName from "feature/restaurants/components/formItems/FormItemRestaurantName";
import FormItemRestaurantOpeningHour from "feature/restaurants/components/formItems/FormItemRestaurantOpeningHour";
import FormItemRestaurantOrderTip from "feature/restaurants/components/formItems/FormItemRestaurantOrderTip";
import FormItemRestaurantRecommendedMenu from "feature/restaurants/components/formItems/FormItemRestaurantRecommendedMenu";
import FormItemTagIds from "feature/restaurants/components/formItems/FormItemTagIds";
import FormTitle from "feature/restaurants/components/formItems/FormTitle";
import { RESTAURANT_FORM_INITIAL_VALUES } from "feature/restaurants/constants/RestaurantFormInitialValues";
import { TTagIdName } from "feature/restaurants/constants/restaurantTagIdsItemList";
import { TRestaurantFormValues } from "feature/restaurants/types/TRestaurantFormValues";
import { useState } from "react";

type TTagId = {
  // eslint 가 key 값을 unused var 로 인식. TS 에서 이런 일이 일어나면 안되지만 임시조치
  // eslint-disable-next-line no-unused-vars
  [key in TTagIdName]: {
    checked: boolean;
  };
};

interface Props {
  isEditMode?: boolean;
}

const RestaurantForm = ({ isEditMode = false }: Props) => {
  const [formValues, setFormValues] = useState<TRestaurantFormValues>(
    RESTAURANT_FORM_INITIAL_VALUES
  );

  const commonProps = {
    isEditMode,
    formValues,
    setFormValues,
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);

    // TODO: 더 나은 방식 생각해내기
    const target = event.target as typeof event.target & TTagId;

    const mood = target.mood.checked;
    const value = target.value.checked;
    const kind = target.kind.checked;
    const liquor = target.liquor.checked;

    console.log("mood", mood);
    console.log("value", value);
    console.log("kind", kind);
    console.log("liquor", liquor);
  };

  return (
    <EmotionWrapper onSubmit={handleSubmit}>
      <FormTitle />
      <FormItemRestaurantName {...commonProps} />
      <FormItemRestaurantComment {...commonProps} />
      <FormItemRestaurantAddress {...commonProps} />
      <FormItemRestaurantDelivery {...commonProps} />
      <FormItemTagIds {...commonProps} />
      <FormItemRestaurantCapacity {...commonProps} />
      <FormItemRestaurantOpeningHour {...commonProps} />
      <FormItemRestaurantRecommendedMenu />
      <FormItemRestaurantCategoryId />
      <FormItemRestaurantOrderTip />
      <FormItemRestaurantLink />
      <FormItemRestaurantImages />
      <Button className="submit">저장하기</Button>
    </EmotionWrapper>
  );
};

export default RestaurantForm;

const EmotionWrapper = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 36px;

  button.submit {
    margin-top: 24px;
    float: right;
  }
`;
