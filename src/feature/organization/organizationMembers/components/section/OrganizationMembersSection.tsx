import styled from "@emotion/styled";
import router from "next/router";
import Button from "components/button/Button";
import Member from "components/dataDisplay/Member";
import Modal from "components/modal/Modal";
import { useState, useEffect } from "react";
import { TMember } from "feature/organization/organizationMembers/types/TMember";

interface Props {
  organizationId: string | number | string[];
  userAuth: number;
}

const OrganizationMemberSection: React.FC<Props> = ({ organizationId, userAuth }) => {
  const [isSuccession, setIsSuccession] = useState(false);
  const [isSelectButtonVIsible, setButtonVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TMember | null>(null);
  const isManager = userAuth === 0;

  /**
   * TODO: 서버에서 해당 단체의 메인 정보, 멤버 정보 받아오기
   */
  const name = "System Consultant Group"; // 서버에서 받아온 단체 이름
  const memberList = [
    { id: 1, memberName: "홍길동", auth: "관리자", imgSrc: "", memberDescription: "관리자입니다." },
    { id: 2, memberName: "김영희", auth: "멤버", imgSrc: "", memberDescription: "김영희입니다." },
    {
      id: 3,
      memberName: "김철수",
      auth: "멤버",
      imgSrc: "",
      memberDescription: "아무거나 다 잘 먹어요.",
    },
  ];

  useEffect(() => {
    if (isSuccession) {
      const transitionEndHandler = () => {
        setButtonVisible(true);
        document.removeEventListener("transitionend", transitionEndHandler);
      };

      document.addEventListener("transitionend", transitionEndHandler);
    } else {
      setButtonVisible(false);
    }
  }, [isSuccession]);

  const handleSuccessionButton = () => {
    setIsSuccession((isSuccession) => !isSuccession);
    console.log(isSuccession);
  };

  const handleSelectMember = (member: TMember) => {
    setSelectedMember(member);
    setOpen(true);
  };

  return (
    <EmotionWrapper isSuccession={isSuccession}>
      <div className="head">
        <span className="orgName">{name}</span>
        <span className="title">{isManager ? "멤버 관리" : "멤버 조회"}</span>
      </div>
      <div className="body">
        <div className="bodyTitle">
          <span className="subtitle">이 단체의 멤버</span>
          {isManager && (
            <Button variant="text" onClick={handleSuccessionButton}>
              {isSuccession ? "취소" : "관리자 승계"}
            </Button>
          )}
        </div>
        <div className="members">
          {memberList.map((member) => (
            <div key={member.id} className="memberContainer">
              <div className="member">
                <Member
                  memberId={member.id}
                  memberName={member.memberName}
                  memberDescription={member.memberDescription}
                  showManagementButton={isManager}
                />
              </div>
              {isSuccession && isSelectButtonVIsible && member.auth !== "관리자" && (
                <Button
                  variant="primary"
                  onClick={() =>
                    handleSelectMember({
                      memberId: member.id,
                      memberName: member.memberName,
                      memberDescription: member.memberDescription,
                      imgSrc: member.imgSrc,
                    })
                  }
                >
                  선택
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
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

export default OrganizationMemberSection;

const EmotionWrapper = styled.div<{ isSuccession: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 30px;
  margin-bottom: 35px;

  div.head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 8px;
  }

  div.bodyTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div.members {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    margin-top: 20px;

    .memberContainer {
      display: flex;
      align-items: center;

      div.member {
        transition: width 0.3s ease;
        width: ${({ isSuccession }) => (isSuccession ? "80%" : "100%")};
        margin-right: ${({ isSuccession }) => (isSuccession ? "6%" : "0px")};
      }
    }
  }

  span {
    font-weight: 300;
    margin-left: 2px;
    font-size: 16px;
    color: ${({ theme }) => theme.color.gray600};
  }

  span.orgName {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.gray300};
  }

  span.title {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.gray700};
  }

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
