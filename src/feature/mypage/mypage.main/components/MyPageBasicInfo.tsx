import styled from "@emotion/styled";
import MyPageInfoItem from "feature/mypage/mypage.main/components/typography/MyPageInfoItem";
import MyPageSectionTitle from "feature/mypage/mypage.main/components/typography/MyPageSectionTitle";

interface Props {}

const MyPageBasicInfo = ({}: Props) => {
  return (
    <EmotionWrapper>
      <MyPageSectionTitle>내 정보</MyPageSectionTitle>
      <div className="item-container">
        <MyPageInfoItem label="나이" value="24세" />
        <MyPageInfoItem label="성별" value="남성" />
      </div>
    </EmotionWrapper>
  );
};

export default MyPageBasicInfo;

const EmotionWrapper = styled.div`
  margin-bottom: 48px;

  .item-container {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }
`;
