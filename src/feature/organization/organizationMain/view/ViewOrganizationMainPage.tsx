import OrganizationMainProfileSection from "feature/organization/organizationMain/components/section/OrganizationMainProfileSection";
import OrganizationMainButtonsSection from "feature/organization/organizationMain/components/section/OrganizationMainButtonsSection";
import OrganizationMainRestaurantsSection from "feature/organization/organizationMain/components/section/OrganizationMainRestaurantsSection";
import Divider from "components/divider/Divider";

interface Props {
  organizationId: string | number;
}

const ViewOrganizationMainPage: React.FC<Props> = ({ organizationId }) => {
  /**
   * TODO: 서버에서 해당 단체에 대한 유저의 권한 받아오기
   */
  const userAuth = 0; // 해당 단체에 대한 유저의 권한 (0: 관리자, 1: 멤버, 2: 방문객)

  return (
    <>
      <OrganizationMainProfileSection organizationId={organizationId} />
      <OrganizationMainButtonsSection organizationId={organizationId} userAuth={userAuth} />
      <Divider />
      <OrganizationMainRestaurantsSection organizationId={organizationId} userAuth={userAuth} />
    </>
  );
};

export default ViewOrganizationMainPage;
