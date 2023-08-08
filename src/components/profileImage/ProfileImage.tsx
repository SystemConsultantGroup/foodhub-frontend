import styled from "@emotion/styled";
import Image from "next/image";

interface Props {
  src?: string;
}

const ProfileImage = ({ src }: Props) => {
  return (
    <EmotionWrapper>
      <Image
        src={src ?? "/images/profile-image-default.png"}
        width={30}
        height={30}
        alt="프로필 이미지"
      />
    </EmotionWrapper>
  );
};

export default ProfileImage;

const EmotionWrapper = styled.div``;
