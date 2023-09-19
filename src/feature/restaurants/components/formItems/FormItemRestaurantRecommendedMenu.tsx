import styled from "@emotion/styled";
import HashtagInput from "components/inputs/HashtagInput/HashtagInput";
import FormItemLabel from "feature/restaurants/components/formItems/typography/FormItemLabel";
import { TRestaurantFormCommonProps } from "feature/restaurants/types/TRestaurantFormCommonProps";

interface Props extends TRestaurantFormCommonProps {}

const FormItemRestaurantRecommendedMenu: React.FC<Props> = ({ formValues, setFormValues }) => {
  const setHashtagList = (hashtagList: string[]) => {
    setFormValues({
      ...formValues,
      recommendedMenu: JSON.stringify(hashtagList),
    });
  };

  return (
    <EmotionWrapper>
      <FormItemLabel>추천 메뉴</FormItemLabel>
      <HashtagInput
        placeholder="쉼표로 구분하여 메뉴를 추가하세요!"
        setHashTagList={setHashtagList}
        hashtagList={JSON.parse(formValues.recommendedMenu ?? "[]")}
      />
    </EmotionWrapper>
  );
};

export default FormItemRestaurantRecommendedMenu;

const EmotionWrapper = styled.div``;
