import styled from "@emotion/styled";
import Image from "next/image";

function ImageInputItemAdd() {
  return (
    <EmotionWrapper>
      <Image
        width={20}
        height={20}
        alt="이미지 삭제 아이콘"
        src="/images/icons/plus-button-filled.svg"
      />
    </EmotionWrapper>
  );
}

export default ImageInputItemAdd;

const EmotionWrapper = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 25px;
  background: ${({ theme }) => theme.color.white};
  border: 0.5px dashed ${({ theme }) => theme.color.gray300};
`;
