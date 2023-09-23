import ManagementButtons from "feature/organization/organization.main/components/buttons/ManagementButtons";
import MemberButtons from "feature/organization/organization.main/components/buttons/MemberButtons";
import VisitorButtons from "feature/organization/organization.main/components/buttons/VisitorButtons";
import ActionButtons from "feature/organization/organization.main/components/buttons/ActionButtons";
import { TAuthButtonsComponent } from "feature/organization/organization.main/types/TAuthButtonsComponent";

interface Props {
  organizationId: number;
  userAuth: number;
}

const AUTH_BUTTONS_COMPONENT: TAuthButtonsComponent = {
  0: ManagementButtons,
  1: MemberButtons,
  2: VisitorButtons,
};

const OrganizationMainButtonsSection: React.FC<Props> = ({ userAuth, organizationId }) => {
  const AuthButtonsComponent = AUTH_BUTTONS_COMPONENT[userAuth as keyof TAuthButtonsComponent];

  return (
    <>
      <AuthButtonsComponent organizationId={organizationId} />
      {(userAuth === 0 || userAuth === 1) && <ActionButtons organizationId={organizationId} />}
    </>
  );
};

export default OrganizationMainButtonsSection;
