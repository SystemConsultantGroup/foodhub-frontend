import styled from "@emotion/styled";
import ImageInputItem from "components/inputs/ImageInput/items/ImageInputItem";
import ImageInputItemAdd from "components/inputs/ImageInput/items/ImageInputItemAdd";

function ImageInput() {
  return (
    <EmotionWrapper>
      <p className="label">맛집 관련 사진</p>
      <p className="description">최대 4장 선택</p>
      <div className="image-input-item-wrapper">
        <ImageInputItem />
        <ImageInputItem />
        <ImageInputItemAdd />
      </div>
    </EmotionWrapper>
  );
}

export default ImageInput;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  .label {
    font-size: 16px;
    font-weight: 300;
    color: ${({ theme }) => theme.color.gray600};
  }

  .description {
    font-size: 12px;
    font-weight: 300;
    color: ${({ theme }) => theme.color.gray400};
  }

  .image-input-item-wrapper {
    display: flex;
    column-gap: 8px;
  }
`;
