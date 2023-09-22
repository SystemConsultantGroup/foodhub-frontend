import styled from "@emotion/styled";
import ManagementButtons from "feature/organization/organization.main/components/buttons/ManagementButtons";
import MemberButtons from "feature/organization/organization.main/components/buttons/MemberButtons";
import VisitorButtons from "feature/organization/organization.main/components/buttons/VisitorButtons";
import ActionButtons from "feature/organization/organization.main/components/buttons/ActionButtons";

interface Props {
  organizationId: number;
  userAuth: number;
}

const OrganizationMainButtonsSection: React.FC<Props> = ({ userAuth, organizationId }) => {
  let AuthButtonsComponent;

  if (userAuth === 0) {
    AuthButtonsComponent = ManagementButtons;
  } else if (userAuth === 1) {
    AuthButtonsComponent = MemberButtons;
  } else {
    AuthButtonsComponent = VisitorButtons;
  }

  return (
    <EmotionWrapper>
      <AuthButtonsComponent organizationId={organizationId} />
      {(userAuth === 0 || userAuth === 1) && (
        <ActionButtons organizationId={organizationId}></ActionButtons>
      )}
    </EmotionWrapper>
  );
};

export default OrganizationMainButtonsSection;

const EmotionWrapper = styled.div``;
