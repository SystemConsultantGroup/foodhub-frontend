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
import { TRestaurantFormValues } from "feature/restaurants/types/TRestaurantFormValues";
import { useState } from "react";

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

  return (
    <EmotionWrapper>
      <FormTitle />
      <FormItemRestaurantName {...commonProps} />
      <FormItemRestaurantComment />
      <FormItemRestaurantAddress />
      <FormItemRestaurantDelivery />
      <FormItemTagIds />
      <FormItemRestaurantCapacity />
      <FormItemRestaurantOpeningHour />
      <FormItemRestaurantRecommendedMenu />
      <FormItemRestaurantCategoryId />
      <FormItemRestaurantOrderTip />
      <FormItemRestaurantLink />
      <FormItemRestaurantImages />
      <Button>저장하기</Button>
    </EmotionWrapper>
  );
};

export default RestaurantForm;

const EmotionWrapper = styled.div`
  button {
    margin-top: 24px;
    float: right;
  }
`;
