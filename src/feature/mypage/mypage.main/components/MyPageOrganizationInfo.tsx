import styled from "@emotion/styled";
import MyPageSectionTitle from "feature/mypage/mypage.main/components/typography/MyPageSectionTitle";

const MyPageOrganizationInfo = () => {
  return (
    <EmotionWrapper>
      <MyPageSectionTitle>내가 속한 단체 정보</MyPageSectionTitle>
    </EmotionWrapper>
  );
};

export default MyPageOrganizationInfo;

const EmotionWrapper = styled.div`
  margin-bottom: 64px;
`;
