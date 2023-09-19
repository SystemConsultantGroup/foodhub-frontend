import styled from "@emotion/styled";
import ImageInput from "components/inputs/ImageInput/ImageInput";
import { RESTAURANT_IMAGES_MAX_COUNT } from "constant/limit";

interface Props {
  existingImageUrlList?: string[];
}

const FormItemRestaurantImages: React.FC<Props> = ({ existingImageUrlList }) => {
  return (
    <EmotionWrapper>
      <ImageInput
        label="맛집 사진을 추가보아요! "
        maxImageCount={RESTAURANT_IMAGES_MAX_COUNT}
        existingImageUrlList={existingImageUrlList}
      />
    </EmotionWrapper>
  );
};

export default FormItemRestaurantImages;

const EmotionWrapper = styled.div``;
