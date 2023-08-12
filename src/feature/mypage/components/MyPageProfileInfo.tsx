import styled from "@emotion/styled";
import ProfileImage from "components/profileImage/ProfileImage";

interface Props {}

const MyPageProfileInfo = ({}: Props) => {
  return (
    <EmotionWrapper>
      <div className="profile-section">
        <ProfileImage defaultPhotoId={1} size={70} />
        <div>
          <p className="user-name">홍길동</p>
          <p className="user-description">이 시대 최고의 미식 탐험가</p>
        </div>
      </div>
    </EmotionWrapper>
  );
};

export default MyPageProfileInfo;

const EmotionWrapper = styled.div`
  .profile-section {
    display: flex;
    column-gap: 16px;
    align-items: center;

    .user-name {
      font-size: 16px;
      font-weight: 700;
      color: ${({ theme }) => theme.color.black};
      margin-bottom: 8px;
    }

    .user-description {
      font-size: 12px;
      color: ${({ theme }) => theme.color.gray400};
    }
  }
`;
