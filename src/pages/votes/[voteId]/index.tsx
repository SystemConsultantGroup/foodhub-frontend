import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";
import { useRouter } from "next/router";

const PageVoteDetail = () => {
  const { query } = useRouter();
  const voteId = query.voteId ?? 0;

  return (
    <EmotionWrapper>
      <PageMarker
        title={`${voteId} 번 투표 상세 페이지`}
        description="실제로 투표 할 수 있는 페이지. 다수의 선택지, 투표 수정으로 갈 수 있음. "
      />
    </EmotionWrapper>
  );
};

export default PageVoteDetail;

const EmotionWrapper = styled.div``;
