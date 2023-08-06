import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";
import { useRouter } from "next/router";

interface Props {}

const PageVoteEdit = ({}: Props) => {
  const { query } = useRouter();
  const voteId = query.voteId ?? 0;

  return (
    <EmotionWrapper>
      <PageMarker
        title={`${voteId} 번 투표 수정 페이지`}
        description="투표를 수정할 수 있는 페이지. 제목, 식당, 복수여부, 익명 등 수정"
      />
    </EmotionWrapper>
  );
};

export default PageVoteEdit;

const EmotionWrapper = styled.div``;
