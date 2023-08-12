import styled from "@emotion/styled";
import MyPageProfileInfo from "feature/mypage/components/MyPageProfileInfo";

interface Props {}

const ViewMypage = ({}: Props) => {
  return (
    <EmotionWrapper>
      <MyPageProfileInfo />
    </EmotionWrapper>
  );
};

export default ViewMypage;

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
