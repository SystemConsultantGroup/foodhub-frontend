import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";
import { useRouter } from "next/router";

const PageMemberRemoveConfirm = () => {
  const { query } = useRouter();
  const memberId = query.memberId ?? 0;

  return (
    <EmotionWrapper>
      <PageMarker
        title={`${memberId} 멤버 삭제 컨펌 페이지`}
        description="단체 인원 삭제 컨펌 페이지 "
      />
    </EmotionWrapper>
  );
};

export default PageMemberRemoveConfirm;

const EmotionWrapper = styled.div``;
