import styled from "@emotion/styled";
import Modal from "components/modal/Modal";
import Member from "components/dataDisplay/Member";
import { TMember } from "feature/organization/organization.members/types/TMember";
import router from "next/router";
import { useRouter } from "next/router";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedMember: TMember | null;
}

const SuccessionModal: React.FC<Props> = ({ open, setOpen, selectedMember }) => {
  const { query } = useRouter();
  const organizationId = (query.organizationId ?? 0) as number;

  return (
    <EmotionWrapper>
      <Modal
        open={open}
        title="관리자 승계"
        onConfirm={() => {
          setOpen(false);
          router.push(`/organizations/${organizationId}`);
          /**
           * TODO: 관리자 권한 승계
           */
        }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p style={{ lineHeight: 1.5 }}>
            관리자를 아래 멤버에게 위임하시겠습니까? 권한을 승계하면, 나는 멤버로 변경됩니다.
          </p>
          {selectedMember && (
            <Member
              showManagementButton={false}
              memberId={selectedMember?.memberId}
              memberName={selectedMember?.memberName}
              memberDescription={selectedMember?.memberDescription}
            />
          )}
        </div>
      </Modal>
    </EmotionWrapper>
  );
};

export default SuccessionModal;

const EmotionWrapper = styled.div`
  div.modalContent {
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: red;
    height: 100px;

    p {
      font-size: 14px;
      color: ${({ theme }) => theme.color.gray500};
      line-height: 1.5;
    }
  }
`;
