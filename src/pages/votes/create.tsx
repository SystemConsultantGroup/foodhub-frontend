import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

interface Props {}

const PageVoteList = ({}: Props) => {
  const { query } = useRouter();
  const organizationId = query.organizationId ?? 0; // 쿼리 스트링으로 넘김

  return (
    <EmotionWrapper>
      <PageMarker
        title={`${organizationId} 번 단체의 투표 생성 페이지`}
        description="투표를 생성할 수 있는 페이지 "
      />
    </EmotionWrapper>
  );
};

export default PageVoteList;

const EmotionWrapper = styled.div``;

export const getServerSideProps: GetServerSideProps = async ({ res, query }) => {
  const errorObj = {
    statusCode: 400,
    title: "단체 정보가 없어 페이지를 불러올 수 없습니다 🥲",
  };
  const error = query.organizationId ? false : errorObj;

  return {
    props: {
      error,
    },
  };
};
