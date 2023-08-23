import styled from "@emotion/styled";
import ManagementButtons from "feature/organization/organizationMain/components/ManagementButtons";
import MemberButtons from "feature/organization/organizationMain/components/MemberButtons";
import VisitorButtons from "feature/organization/organizationMain/components/VisitorButtons";
import ActionButtons from "feature/organization/organizationMain/components/ActionButtons";

interface Props {
  organizationId: string | number | string[];
  userAuth: number;
}

const ViewAuthButtons: React.FC<Props> = ({ userAuth, organizationId }) => {
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
      <div className="authButtons">
        <AuthButtonsComponent organizationId={organizationId} />
      </div>
      {(userAuth === 0 || userAuth === 1) && (
        <ActionButtons organizationId={organizationId}></ActionButtons>
      )}
    </EmotionWrapper>
  );
};

export default ViewAuthButtons;

const EmotionWrapper = styled.div`
  .authButtons {
    button {
      color: ${({ theme }) => theme.color.primary600};
      background-color: ${({ theme }) => theme.color.primary100};
    }
  }
`;
