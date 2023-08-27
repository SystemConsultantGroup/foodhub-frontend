import styled from "@emotion/styled";
import MypageDeleteAlert from "feature/mypage/mypage.delete/components/MypageDeleteAlert";
import MypageDeleteConfirmForm from "feature/mypage/mypage.delete/components/MypageDeleteConfirmForm";

interface Props {}

const ViewMypageDelete = ({}: Props) => {
  return (
    <EmotionWrapper>
      <MypageDeleteAlert />
      <MypageDeleteConfirmForm />
    </EmotionWrapper>
  );
};

export default ViewMypageDelete;

const EmotionWrapper = styled.div``;
