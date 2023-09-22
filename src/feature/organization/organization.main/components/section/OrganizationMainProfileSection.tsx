import styled from "@emotion/styled";
import Image from "next/image";
import LocationIcon from "feature/organization/organization.main/components/icons/LocationIcon";

interface Props {
  organizationId: number;
}

const OrganizationMainProfileSection: React.FC<Props> = ({ organizationId }) => {
  /**
   * TODO: organizationId에 해당하는 단체 이름, 설명, 활동 지역, 프로필이미지 받아오기
   */
  const organizationImageSrc = null; // 서버에서 받아온 단체 프로필 이미지
  const name = "System Consultant Group"; // 서버에서 받아온 단체 이름
  const description = "성균관대학교 최고의 소프트웨어 개발 단체"; // 서버에서 받아온 단체 설명
  const area = "경기도 수원시 장안구 천천동"; // 서버에서 받아온 단체 활동 지역
  const imageSrc = organizationImageSrc ?? "/images/profile-image-default-org.png";

  return (
    <EmotionWrapper>
      <Image
        src={imageSrc}
        className="profileImage"
        width={90}
        height={90}
        priority
        alt="단체 프로필 이미지"
      />
      <div className="profileInfo">
        <span className="name">{name}</span>
        <span className="description">{description}</span>
        <div className="area">
          <LocationIcon />
          <span className="description">{area}</span>
        </div>
      </div>
    </EmotionWrapper>
  );
};

export default OrganizationMainProfileSection;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;

  .profileImage {
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.shadow.default};
  }

  .profileInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .area {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }

  span {
    line-height: 1.5;
  }

  span.name {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.gray700};
  }

  span.description {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.gray300};
  }
`;
