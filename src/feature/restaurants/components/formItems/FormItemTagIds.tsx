import styled from "@emotion/styled";
import Radio from "components/radio/Radio";
import FormItemLabel from "feature/restaurants/components/formItems/typography/FormItemLabel";
import { RESTAURANT_TAG_IDS_ITEM_LIST } from "feature/restaurants/constants/restaurantTagIdsItemList";
import { TRestaurantFormCommonProps } from "feature/restaurants/types/TRestaurantFormCommonProps";

interface Props extends TRestaurantFormCommonProps {}

const FormItemTagIds: React.FC<Props> = ({ setFormValues, formValues }) => {
  return (
    <EmotionWrapper>
      <FormItemLabel>이 식당은...</FormItemLabel>
      <Radio.Group>
        {RESTAURANT_TAG_IDS_ITEM_LIST.map((item) => {
          const { name, value, label } = item;
          return (
            <Radio key={value} name={name} value={value} className="radio-item">
              {label}
            </Radio>
          );
        })}
      </Radio.Group>
    </EmotionWrapper>
  );
};

export default FormItemTagIds;

const EmotionWrapper = styled.div`
  .radio-item {
    padding: 8px 20px;
    font-size: 12px;
  }
`;
