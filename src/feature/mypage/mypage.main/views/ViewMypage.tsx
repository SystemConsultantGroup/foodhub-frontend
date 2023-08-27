import MyPageActionButtons from "feature/mypage/mypage.main/components/MyPageActionButtons";
import MyPageBasicInfo from "feature/mypage/mypage.main/components/MyPageBasicInfo";
import MyPageOrganizationInfo from "feature/mypage/mypage.main/components/MyPageOrganizationInfo";
import MyPageProfileInfo from "feature/mypage/mypage.main/components/MyPageProfileInfo";

const ViewMypage = () => {
  return (
    <>
      <MyPageProfileInfo />
      <MyPageBasicInfo />
      <MyPageOrganizationInfo />
      <MyPageActionButtons />
    </>
  );
};

export default ViewMypage;
