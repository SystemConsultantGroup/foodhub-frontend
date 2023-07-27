import Image from "next/image";
import styled from "@emotion/styled";

interface Props {
  file: File;
}

function ImageInputItem({ file }: Props) {
  const localImageUrl = URL.createObjectURL(file);

  return (
    <EmotionWrapper imageUrl={localImageUrl}>
      <Image
        width={16}
        height={16}
        alt="이미지 삭제 아이콘"
        className="delete-icon"
        src="/images/icons/x-button-filled.svg"
      />
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
