import styled from "@emotion/styled";
import EmptyOrganizationCTA from "feature/mypage/mypage.main/components/empty/EmptyOrganizationCTA";
import MyPageSectionTitle from "feature/mypage/mypage.main/components/typography/MyPageSectionTitle";

const MyPageOrganizationInfo = () => {
  const orgList = [];
  const isEmpty = orgList?.length === 0;

  return (
    <EmotionWrapper>
      <MyPageSectionTitle>내가 속한 단체 정보</MyPageSectionTitle>
      {isEmpty && <EmptyOrganizationCTA />}
    </EmotionWrapper>
  );
};

export default MyPageOrganizationInfo;

const EmotionWrapper = styled.div`
  margin-bottom: 64px;
`;
