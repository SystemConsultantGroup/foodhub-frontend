import styled from "@emotion/styled";
import Dropdown from "components/dropdown/Dropdown";
import { RESTAURANT_CATEGORY_ID_DROPDOWN_LIST } from "feature/restaurants/constants/restaurantCategoryIdDropdownList";
import { TRestaurantFormCommonProps } from "feature/restaurants/types/TRestaurantFormCommonProps";

interface Props extends TRestaurantFormCommonProps {}

const { Option } = Dropdown;

const FormItemRestaurantCategoryId: React.FC<Props> = ({ formValues, setFormValues }) => {
  return (
    <EmotionWrapper>
      <Dropdown
        label="맛집 분류"
        placeHolder="이 맛집은 어떤 분류에 속하나요?"
        value={formValues.categoryId}
        onSelectValueChange={(value) => {
          setFormValues({
            ...formValues,
            categoryId: value,
          });
        }}
      >
        {RESTAURANT_CATEGORY_ID_DROPDOWN_LIST.map((item) => {
          const { value, label } = item;

          return (
            <Option key={value} value={value}>
              {label}
            </Option>
          );
        })}
      </Dropdown>
    </EmotionWrapper>
  );
};

export default FormItemRestaurantCategoryId;

const EmotionWrapper = styled.div``;
