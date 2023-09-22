import ManagementButtons from "feature/organization/organization.main/components/buttons/ManagementButtons";
import MemberButtons from "feature/organization/organization.main/components/buttons/MemberButtons";
import VisitorButtons from "feature/organization/organization.main/components/buttons/VisitorButtons";

export type TAuthButtonsComponent = {
  0: typeof ManagementButtons;
  1: typeof MemberButtons;
  2: typeof VisitorButtons;
};
