import styled from "@emotion/styled";
import OrganizationProfileSection from "feature/organization/organizationMain/components/section/OrganizationProfileSection";
import OrganizationButtonsSection from "feature/organization/organizationMain/components/section/OrganizationButtonsSection";
import OrganizationRestaurantsSection from "feature/organization/organizationMain/components/section/OrganizationRestaurantsSection";
import Divider from "components/divider/Divider";

interface Props {
  organizationId: string | number | string[];
}

const ViewOrganizationMainPage: React.FC<Props> = ({ organizationId }) => {
  /**
   * TODO: 서버에서 해당 단체에 대한 유저의 권한 받아오기
   */
  const userAuth = 0; // 해당 단체에 대한 유저의 권한 (0: 관리자, 1: 멤버, 2: 방문객)

  return (
    <EmotionWrapper>
      <OrganizationProfileSection organizationId={organizationId} />
      <OrganizationButtonsSection organizationId={organizationId} userAuth={userAuth} />
      <Divider />
      <OrganizationRestaurantsSection organizationId={organizationId} userAuth={userAuth} />
    </EmotionWrapper>
  );
};

export default ViewOrganizationMainPage;

const EmotionWrapper = styled.div``;
