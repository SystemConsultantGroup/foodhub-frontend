import styled from "@emotion/styled";
import Checkbox from "components/checkbox/Checkbox";
import { TRestaurantFormCommonProps } from "feature/restaurants/types/TRestaurantFormCommonProps";
import { RESTAURANT_DELIVERY_CHECKBOX_ITEM_LIST } from "feature/restaurants/constants/restaurantDeliveryCheckboxItemList";
import FormItemLabel from "feature/restaurants/components/formItems/typography/FormItemLabel";
import { useCallback } from "react";

interface Props extends TRestaurantFormCommonProps {}

const FormItemRestaurantDelivery: React.FC<Props> = ({ isEditMode, formValues, setFormValues }) => {
  const handleCheckedItem = useCallback(
    (value: string) => {
      setFormValues((prev) => ({
        ...prev,
        delivery: value === "true" ? true : false,
      }));
    },
    [setFormValues]
  );

  return (
    <EmotionWrapper>
      <FormItemLabel>배달 가능 여부</FormItemLabel>
      <Checkbox.Group
        checkedList={[String(formValues.delivery) ?? "true"]}
        setCheckedItem={(checkedList) => {
          handleCheckedItem(checkedList);
        }}
      >
        {RESTAURANT_DELIVERY_CHECKBOX_ITEM_LIST.map((item) => {
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

export default FormItemRestaurantDelivery;

const EmotionWrapper = styled.div``;
