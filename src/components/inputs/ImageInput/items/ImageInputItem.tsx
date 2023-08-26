import Image from "next/image";
import styled from "@emotion/styled";
import { TFileWithUniqueIndex } from "components/inputs/ImageInput/types/TFileWithUniqueIndex";

interface Props {
  file?: TFileWithUniqueIndex; // 직접 업로드한 이미지를 받아올 때 사용
  imageUrl?: string; // 서버에서 이미지를 받아올 때 사용
  onDelete: () => void;
}

function ImageInputItem({ file, imageUrl, onDelete }: Props) {
  const localImageUrl = file ? URL.createObjectURL(file.file) : imageUrl ?? "";

  const handleClickDeleteButton = () => {
    onDelete();
  };

  return (
    <EmotionWrapper imageUrl={localImageUrl}>
      <button onClick={handleClickDeleteButton} className="delete-icon">
        <Image
          width={16}
          height={16}
          alt="이미지 삭제 아이콘"
          src="/images/icons/x-button-filled.svg"
        />
      </button>
    </EmotionWrapper>
  );
}

export default ImageInputItem;

const EmotionWrapper = styled.div<{ imageUrl: string }>`
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 25px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  border: 0.5px solid ${({ theme }) => theme.color.gray300};
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;

  .delete-icon {
    position: absolute;
    top: 0px;
    right: 0px;
  }

  .preview-image {
    border-radius: 25px;
  }
`;
