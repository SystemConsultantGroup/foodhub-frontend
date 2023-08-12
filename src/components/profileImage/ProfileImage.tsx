import styled from "@emotion/styled";
import Image from "next/image";

interface Props {
  src?: string;
  defaultPhotoId: number;
}

const ProfileImage = ({ src, defaultPhotoId }: Props) => {
  const imageSrc = src ?? `/images/profile-image-default-${defaultPhotoId}.png`;

  return (
    <EmotionWrapper>
      <Image src={imageSrc} width={30} height={30} alt="프로필 이미지" />
    </EmotionWrapper>
  );
};

export default ProfileImage;

const EmotionWrapper = styled.div``;
