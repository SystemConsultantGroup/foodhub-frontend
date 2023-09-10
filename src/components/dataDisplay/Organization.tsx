import styled from "@emotion/styled";
import { TOrganizationProps } from "components/dataDisplay/types/TOrganizationProps";
import Image from "next/image";
import Link from "next/link";
import { textEllipsis } from "styles/ellipsis/textEllipsis";

const Organization = ({ imageSrc, orgId, orgName, orgDescription }: TOrganizationProps) => {
  const src = imageSrc ?? "/images/defaults/default-organization-profile-image.png";
  const alt = `${orgName} 단체 로고`;
  const orgLink = `/organizations/${orgId}`;

  return (
    <EmotionWrapper href={orgLink}>
      <Image className="organization-profile-image" src={src} width={40} height={40} alt={alt} />
      <div className="organization-info">
        <p className="organization-name">{orgName}</p>
        <p className="organization-description">{orgDescription}</p>
      </div>
    </EmotionWrapper>
  );
};

export default Organization;

const EmotionWrapper = styled(Link)`
  display: flex;
  align-items: center;

  padding: 14px 20px;
  background-color: ${({ theme }) => theme.color.gray100};
  border: 1px solid ${({ theme }) => theme.color.gray200};
  border-radius: 6px;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.primary500};
  }

  .organization-profile-image {
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.shadow.default};
    margin-right: 16px;
  }

  .organization-info {
    flex: 1;
    overflow: hidden;

    .organization-name {
      font-size: 18px;
      font-weight: 700;
      color: ${({ theme }) => theme.color.gray700};
      margin-bottom: 3px;
      ${textEllipsis}
    }

    .organization-description {
      font-size: 12px;
      font-weight: 400;
      color: ${({ theme }) => theme.color.gray500};
      ${textEllipsis}
    }
  }
`;
