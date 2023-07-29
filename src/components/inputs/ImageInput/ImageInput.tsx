import styled from "@emotion/styled";
import ImageInputItem from "components/inputs/ImageInput/items/ImageInputItem";
import ImageInputItemAdd from "components/inputs/ImageInput/items/ImageInputItemAdd";
import { TFileWithUniqueIndex } from "components/inputs/ImageInput/types/TFileWithUniqueIndex";
import { useEffect, useRef, useState } from "react";

const MOCKUP_IMAGE_URL_LIST = [
  "https://unblast.com/wp-content/uploads/2018/07/Paper-Pressed-Logo-Mockup.jpg",
  "https://www.mockupworld.co/wp-content/uploads/dynamic/2023/07/open-shoe-box-free-mockup-690x455-c-default.jpg",
];

function ImageInput() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrlListState, setImageUrlListState] = useState<string[]>(MOCKUP_IMAGE_URL_LIST);
  const imageUrlRef = useRef<HTMLInputElement>(null);
  const fileInputUniqueIndexCount = useRef(0);
  const [fileInputListState, setFileInputListState] = useState<TFileWithUniqueIndex[] | null>(null);

  const handleClickImageAddButton = () => {
    fileInputRef.current?.click();
  };

  const handleChangeFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) return;

    const fileArray = Array.from(fileList);
    const fileListWithUniqueIndex = fileArray.map((file) => {
      return {
        file,
        uniqueIndex: fileInputUniqueIndexCount.current++,
      };
    });

    const existingFiles =
      fileInputListState?.length === 0 || fileInputListState === null ? [] : fileInputListState;
    setFileInputListState([
      ...existingFiles,
      ...(fileListWithUniqueIndex as TFileWithUniqueIndex[]),
    ]);
  };

  const handleClickDeleteImage = (uniqueIndex: number) => {
    const newFileInputListState = fileInputListState?.filter(
      (file) => file.uniqueIndex !== uniqueIndex
    );
    setFileInputListState(newFileInputListState as TFileWithUniqueIndex[]);
  };

  const handleDeleteImageUrl = (imageUrl: string) => {
    const newImageUrlListState = imageUrlListState?.filter((url) => url !== imageUrl);
    setImageUrlListState(newImageUrlListState);
  };

  useEffect(() => {
    if (!imageUrlRef?.current) return;

    imageUrlRef.current.value = JSON.stringify(imageUrlListState);
  }, [imageUrlListState]);

  return (
    <EmotionWrapper>
      <p className="label">맛집 관련 사진</p>
      <p className="description">최대 4장 선택</p>
      <div className="image-input-item-wrapper">
        {imageUrlListState.map((url, index) => {
          return (
            <ImageInputItem
              key={url}
              imageUrl={url}
              onDelete={() => {
                handleDeleteImageUrl(url);
              }}
            />
          );
        })}
        {fileInputListState?.map((file, index) => {
          return (
            <ImageInputItem
              key={index}
              file={file}
              onDelete={() => {
                handleClickDeleteImage(file.uniqueIndex);
              }}
            />
          );
        })}
        <ImageInputItemAdd onClick={handleClickImageAddButton} />
      </div>
      <input
        ref={fileInputRef}
        name="imageInput"
        type="file"
        hidden
        multiple
        onChange={handleChangeFileInput}
      />
      <input ref={imageUrlRef} name="imageUrlInput" hidden />
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
