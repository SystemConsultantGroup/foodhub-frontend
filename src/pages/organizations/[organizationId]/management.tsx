import styled from "@emotion/styled";
import { useRouter } from "next/router";
import OrganizationManagement from "feature/organization/organizationManagement/views/ViewOrganizationManagement";

const PageOrganizationDetail = () => {
  const { query } = useRouter();
  const organizationId = query.organizationId ?? 0;
  /**
   * TODO: 서버에서 해당 단체에 대한 정보 받아오기
   */
  console.log(organizationId); // 커밋용 임시 코드

  return (
    <EmotionWrapper>
      <OrganizationManagement organizationId={organizationId}></OrganizationManagement>
    </EmotionWrapper>
  );
};

export default PageOrganizationDetail;

const EmotionWrapper = styled.div``;
