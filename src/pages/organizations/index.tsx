import styled from "@emotion/styled";
import PageMarker from "components/pageMarker/PageMarker";
import Link from "next/link";
import Organization from "components/dataDisplay/Organization";

const PageOrganizationList = () => {
  return (
    <EmotionWrapper>
      <PageMarker
        title="전체 단체 리스트 페이지"
        description="단체를 지역별로 나누어 볼 수 있는 페이지"
      />
      <Link className="link" href="organizations/1">
        <Organization
          orgId={1}
          orgName="시스템 컨설턴트 그룹"
          orgDescription="성균관대학교 최고의 소프트웨어 개발 단체"
        />
      </Link>
    </EmotionWrapper>
  );
};

export default PageOrganizationList;

const EmotionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;

  .link {
    text-decoration-line: none;
  }
`;
