import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";
import { useRouter } from "next/router";

interface Props {}

const PageOrganizationDetail = ({}: Props) => {
  const { query } = useRouter();
  const organizationId = query.organizationId ?? 0;

  return (
    <EmotionWrapper>
      <PageMarker
        title={`${organizationId} 번 단체 상세 페이지`}
        description="단체 관리 및 맛집 목록 등 단체에 대한 정보를 볼 수 있는 페이지 "
      />
    </EmotionWrapper>
  );
};

export default PageOrganizationDetail;

const EmotionWrapper = styled.div``;
