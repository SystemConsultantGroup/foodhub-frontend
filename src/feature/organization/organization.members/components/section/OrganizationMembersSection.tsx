import styled from "@emotion/styled";
import Button from "components/button/Button";
import Member from "components/dataDisplay/Member";
import { useState, useEffect } from "react";
import { TMember } from "feature/organization/organization.members/types/TMember";
import SuccessionModal from "feature/organization/organization.members/components/modals/SuccessionModal";

interface Props {
  organizationId: number;
  userAuth: number;
}

const OrganizationMemberSection: React.FC<Props> = ({ organizationId, userAuth }) => {
  const [isSuccessorSelectMode, setisSuccessorSelectMode] = useState(false);
  const [isSelectButtonVisible, setIsSelectButtonVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TMember | null>(null);
  const isManager = userAuth === 0;

  /**
   * TODO: 서버에서 해당 단체의 메인 정보, 멤버 정보 받아오기
   */
  const name = "시스템 컨설턴트 그룹"; // 서버에서 받아온 단체 이름
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
    const memberContainers = document.querySelectorAll(".memberContainer");

    if (isSuccessorSelectMode) {
      const transitionEndHandler = () => {
        setIsSelectButtonVisible(true);
        memberContainers.forEach((container) => {
          container.removeEventListener("transitionend", transitionEndHandler);
        });
      };

      memberContainers.forEach((container) => {
        container.addEventListener("transitionend", transitionEndHandler);
      });
    } else {
      setIsSelectButtonVisible(false);
    }
  }, [isSuccessorSelectMode]);

  const handleSuccessionButton = () => {
    setisSuccessorSelectMode((isSuccessorSelectMode) => !isSuccessorSelectMode);
  };

  const handleSelectMember = (member: TMember) => {
    setSelectedMember(member);
    setOpen(true);
  };

  return (
    <EmotionWrapper isSuccessorSelectMode={isSuccessorSelectMode}>
      <div className="head">
        <span className="orgName">{name}</span>
        <span className="title">{isManager ? "멤버 관리" : "멤버 조회"}</span>
      </div>
      <div className="body">
        <div className="bodyTitle">
          <span className="subtitle">이 단체의 멤버</span>
          <div>
            {isManager && (
              <Button variant="text" onClick={handleSuccessionButton}>
                {isSuccessorSelectMode ? "취소" : "관리자 승계"}
              </Button>
            )}
          </div>
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
              {isSuccessorSelectMode && isSelectButtonVisible && (
                <div>
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
                    disabled={member.auth === "관리자"}
                  >
                    선택
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <SuccessionModal
        open={open}
        setOpen={setOpen}
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />
    </EmotionWrapper>
  );
};

export default OrganizationMemberSection;

const EmotionWrapper = styled.div<{
  isSuccessorSelectMode: boolean;
}>`
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
      justify-content: space-between;
      align-items: center;

      div.member {
        transition: width 0.1s ease;
        width: ${({ isSuccessorSelectMode }) => (isSuccessorSelectMode ? "80%" : "100%")};
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
`;
