import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";

interface Props {}

const PageOrganizationList = ({}: Props) => {
  return (
    <EmotionWrapper>
      <PageMarker
        title="전체 단체 리스트 페이지"
        description="단체를 지역별로 나누어 볼 수 있는 페이지"
      />
    </EmotionWrapper>
  );
};

export default PageOrganizationList;

const EmotionWrapper = styled.div``;
