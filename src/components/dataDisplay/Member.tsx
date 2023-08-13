import Image from "next/image";
import styled from "@emotion/styled";
import { textEllipsis } from "styles/ellipsis/textEllipsis";
import IconMoreDots from "components/icons/IconMoreDots";

interface Props {
  imageSrc?: string;
  memberName: string;
  memberDescription: string;
}

const Member = ({ imageSrc, memberName, memberDescription }: Props) => {
  const src = imageSrc ?? "/images/defaults/default-member-profile-image.jpeg";
  const alt = `${memberName} 멤버 프로필 사진`;

  return (
    <EmotionWrapper>
      <Image className="member-profile-image" src={src} width={40} height={40} alt={alt} />
      <div className="member-info">
        <p className="member-name">{memberName}</p>
        <p className="member-description">{memberDescription}</p>
      </div>
      <IconMoreDots />
    </EmotionWrapper>
  );
};

export default Member;

const EmotionWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 14px 20px;
  /* background-color: ${({ theme }) => theme.color.primary100}; */
  border: 1px solid ${({ theme }) => theme.color.gray200};
  border-radius: 6px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.primary500};
    /* background-color: ${({ theme }) => theme.color.primary500}; */
  }

  .member-profile-image {
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.gray200};
    margin-right: 16px;
  }

  .member-info {
    flex: 1;
    overflow: hidden;

    .member-name {
      font-size: 18px;
      font-weight: 700;
      color: ${({ theme }) => theme.color.gray700};
      margin-bottom: 3px;
      ${textEllipsis}
    }

    .member-description {
      font-size: 12px;
      font-weight: 400;
      color: ${({ theme }) => theme.color.gray500};
      ${textEllipsis}
    }
  }
`;
