import styled from "@emotion/styled";
import Image from "next/image";

function ImageInputItem() {
  return (
    <EmotionWrapper>
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

const EmotionWrapper = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 25px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  border: 0.5px solid ${({ theme }) => theme.color.gray300};

  .delete-icon {
    position: absolute;
    top: 0px;
    right: 0px;
  }
`;
