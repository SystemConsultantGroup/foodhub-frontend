import styled from "@emotion/styled";
import Organization from "components/dataDisplay/Organization";
import { MOCKUP_MAIN_PAGE_BEST_ORGANIZATION } from "feature/main/mockup/MockupMainPageBestOrganization";

const MainBestOrganizationSection = () => {
  return (
    <EmotionWrapper>
      <h2>데일리 BEST 단체</h2>
      <div className="best-organization-list">
        {MOCKUP_MAIN_PAGE_BEST_ORGANIZATION.map((organization) => (
          <Organization key={organization.orgId} {...organization} />
        ))}
      </div>
    </EmotionWrapper>
  );
};

export default MainBestOrganizationSection;

const EmotionWrapper = styled.section`
  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 32px;
  }

  .best-organization-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
