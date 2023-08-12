import styled from "@emotion/styled";
import Image from "next/image";

interface Props {
  src?: string;
  size?: number; // in pixels
  defaultPhotoId: number;
}

const ProfileImage = ({ src, defaultPhotoId, size = 30 }: Props) => {
  const imageSrc = src ?? `/images/profile-image-default-${defaultPhotoId}.png`;

  return (
    <EmotionWrapper>
      <Image src={imageSrc} width={size} height={size} alt="프로필 이미지" />
    </EmotionWrapper>
  );
};

export default ProfileImage;

const EmotionWrapper = styled.div``;
