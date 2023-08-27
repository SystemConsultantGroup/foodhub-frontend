import styled from "@emotion/styled";
import dayjs from "dayjs";
import { GENDER_LOOKUP_TABLE } from "feature/mypage/common/constants/genderLookupTable";
import { MOCKUP_MYPAGE_INITIAL_VALUES } from "feature/mypage/common/mockup/MockupMypage";
import MyPageInfoItem from "feature/mypage/mypage.main/components/typography/MyPageInfoItem";
import MyPageSectionTitle from "feature/mypage/mypage.main/components/typography/MyPageSectionTitle";

const MyPageBasicInfo = () => {
  const userInfo = MOCKUP_MYPAGE_INITIAL_VALUES;
  const { birthYear, gender } = userInfo;

  const age = dayjs().year() - Number(birthYear);
  const ageText = `${age}세`;

  const genderText = GENDER_LOOKUP_TABLE[gender] ?? "입력하지 않음";

  return (
    <EmotionWrapper>
      <MyPageSectionTitle>내 정보</MyPageSectionTitle>
      <div className="item-container">
        <MyPageInfoItem label="나이" value={ageText} />
        <MyPageInfoItem label="성별" value={genderText} />
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
