import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import ImageInputItem from "components/inputs/ImageInput/items/ImageInputItem";
import ImageInputItemAdd from "components/inputs/ImageInput/items/ImageInputItemAdd";
import { TFileWithUniqueIndex } from "components/inputs/ImageInput/types/TFileWithUniqueIndex";

interface Props {
  maxImageCount?: number; // 최대 입력할 수 있는 이미지 개수
  existingImageUrlList?: string[]; // 이미 서버에 존재하던 이미지 URL 리스트
  label?: string; // 이미지 인풋 레이블
}

const ImageInput: React.FC<Props> = ({ maxImageCount = 1, existingImageUrlList = [], label }) => {
  const imageUrlRef = useRef<HTMLInputElement>(null); // 이미 서버에 존재하던 이미지 URL 리스트
  const fileInputRef = useRef<HTMLInputElement>(null); // 로컬에서 업로드한 이미지 리스트
  const fileInputUniqueIndexCount = useRef(0); // 로컬 이미지 리스트의 uniqueIndex를 위한 카운트

  const [imageUrlListState, setImageUrlListState] = useState<string[]>(existingImageUrlList);
  const [fileInputListState, setFileInputListState] = useState<TFileWithUniqueIndex[]>([]);

  const handleClickImageAddButton = () => {
    fileInputRef.current?.click();
  };

  // 서버 이미지 (임시로) 삭제 시
  const handleDeleteImageUrl = (imageUrl: string) => {
    const newImageUrlListState = imageUrlListState?.filter((url) => url !== imageUrl);
    setImageUrlListState(newImageUrlListState);
  };

  // 파일 추가 업로드 시
  const handleChangeFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList || !fileInputRef?.current) return;

    const existingFileRefList = fileInputListState?.map((file) => file.file);
    const newFileList = Array.from(fileList).filter((file) => !existingFileRefList?.includes(file));

    // HTML Input Element 내부에서 관리하는 파일 형태로 변경
    const dt = new DataTransfer();
    existingFileRefList?.forEach((file) => dt.items.add(file));
    newFileList.forEach((file) => dt.items.add(file));
    fileInputRef.current.files = dt.files;

    const fileArray = Array.from(fileList);
    const fileListWithUniqueIndex = fileArray.map((file) => {
      return {
        file,
        uniqueIndex: fileInputUniqueIndexCount.current++, // key 값 중복 방지 위해 임의 부여
      };
    });

    const isEmpty = !fileInputListState || fileInputListState?.length === 0;
    const existingFiles = isEmpty ? [] : fileInputListState;
    setFileInputListState([
      ...existingFiles,
      ...(fileListWithUniqueIndex as TFileWithUniqueIndex[]),
    ]);
  };

  // 파일 삭제 시 (로컬 파일 삭제)
  const handleClickDeleteImage = (uniqueIndex: number) => {
    const newFileInputListState = fileInputListState?.filter(
      (file) => file.uniqueIndex !== uniqueIndex
    );
    setFileInputListState(newFileInputListState as TFileWithUniqueIndex[]);
    const newFileListStateWithoutUniqueKey = newFileInputListState?.map((file) => file.file);

    if (!newFileListStateWithoutUniqueKey) return;
    if (!fileInputRef.current) return;

    const dt = new DataTransfer();
    newFileListStateWithoutUniqueKey.forEach((file) => dt.items.add(file));
    fileInputRef.current.files = dt.files;
  };

  const maxImageCountExceeded =
    imageUrlListState.length + fileInputListState?.length > maxImageCount;
  const errorText = maxImageCountExceeded ? `최대 ${maxImageCount}장까지 업로드 가능합니다.` : "";

  useEffect(() => {
    if (!imageUrlRef?.current) return;

    /**
     * props 없이 바로 <form> 객체에서 imageUrl 들도 접근 가능하게 하기 위해 JSON.stringify() 사용
     * 단, 사용처에서 JSON.parse()를 통해 다시 배열로 변환해야 함
     */
    imageUrlRef.current.value = JSON.stringify(imageUrlListState);
  }, [imageUrlListState]);

  return (
    <EmotionWrapper>
      <label className="label">{label}</label>
      <p className="description">최대 {maxImageCount}장 선택</p>
      <div className="image-input-item-wrapper">
        {imageUrlListState.map((url) => {
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
      {errorText && <p className="error-text">{errorText}</p>}
      <input
        hidden
        multiple
        type="file"
        accept="image/*"
        name="imageInput"
        ref={fileInputRef}
        onChange={handleChangeFileInput}
      />
      <input ref={imageUrlRef} name="imageUrlInput" hidden />
    </EmotionWrapper>
  );
};

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
    row-gap: 8px;
    flex-wrap: wrap;
  }

  .error-text {
    font-size: 12px;
    font-weight: 300;
    color: ${({ theme }) => theme.color.danger600};
  }
`;
