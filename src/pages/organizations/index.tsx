import styled from "@emotion/styled";
import router from "next/router";
import PageMarker from "components/pageMarker/PageMarker";
import Button from "components/button/Button";

const PageOrganizationList = () => {
  const handleOnClick = () => {
    router.push("/organizations/1");
  };
  return (
    <EmotionWrapper>
      <PageMarker
        title="전체 단체 리스트 페이지"
        description="단체를 지역별로 나누어 볼 수 있는 페이지"
      />
      <Button variant="secondary" onClick={handleOnClick}>
        단체 개별 페이지로 이동
      </Button>
    </EmotionWrapper>
  );
};

export default PageOrganizationList;

const EmotionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;
