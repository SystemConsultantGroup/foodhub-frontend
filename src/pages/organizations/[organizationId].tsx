import styled from "@emotion/styled";
import { useRouter } from "next/router";
import ProfileOrganization from "feature/organization/organizationMain/views/ViewOrganizationProfile";
import Divider from "components/divider/Divider";
import ManagementButtons from "feature/organization/organizationMain/components/ManagementButtons";

const PageOrganizationDetail = () => {
  const { query } = useRouter();
  const organizationId = query.organizationId ?? 0;
  /**
   * TODO: 서버에서 해당 단체에 대한 유저의 권한 받아오기
   */
  const userAuth = 0; // 해당 단체에 대한 유저의 권한 (0: 관리자, 1: 멤버, 2: 방문객)
  console.log(userAuth); // 커밋용 임시 코드

  return (
    <EmotionWrapper>
      <ProfileOrganization organizationId={organizationId}></ProfileOrganization>
      <ManagementButtons organizationId={organizationId}></ManagementButtons>
      <Divider />
    </EmotionWrapper>
  );
};

export default PageOrganizationDetail;

const EmotionWrapper = styled.div``;
