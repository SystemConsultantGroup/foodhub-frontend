import styled from "@emotion/styled";
import Image from "next/image";

interface Props {
  size?: number;
}

/**
 * 본인 프로필 이미지만을 표시하는 컴포넌트이므로, 내부적으로 인증 및 유저 정보에 따라 데이터를 가져와 이미지를 표시합니다.
 * @return {JSX.Element} 본인 프로필 이미지
 */
const ProfileImage: React.FC<Props> = ({ size = 30 }) => {
  const userImageSrc = null; // 유저가 프로필 세팅했을 시
  const defaultPhotoId = 1; // 유저가 프로필 세팅하지 않았을 시 기본 제공 값 (API 에서 받아올 예정)
  const imageSrc = userImageSrc ?? `/images/profile-image-default-${defaultPhotoId}.png`;

  return (
    <EmotionWrapper>
      <Image src={imageSrc} width={size} height={size} alt="프로필 이미지" />
    </EmotionWrapper>
  );
};

export default ProfileImage;

const EmotionWrapper = styled.div``;
