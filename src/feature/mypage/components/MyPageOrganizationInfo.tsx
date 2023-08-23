import styled from "@emotion/styled";
import MyPageSectionTitle from "feature/mypage/components/typography/MyPageSectionTitle";

interface Props {}

const MyPageOrganizationInfo = ({}: Props) => {
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
