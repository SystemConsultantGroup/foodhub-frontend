import styled from "@emotion/styled";
import Button from "components/button/Button";
import Member from "components/dataDisplay/Member";

interface Props {
  organizationId: string | number | string[];
}

const OrganizationMemberSection: React.FC<Props> = ({ organizationId }) => {
  /**
   * TODO: 서버에서 해당 단체의 메인 정보, 멤버 정보 받아오기
   */
  const name = "System Consultant Group"; // 서버에서 받아온 단체 이름
  const memberList = [
    { id: 1, memberName: "홍길동", auth: "관리자", image: "", memberDescription: "관리자입니다." },
    { id: 2, memberName: "김영희", auth: "멤버", image: "", memberDescription: "김영희입니다." },
    {
      id: 3,
      memberName: "김철수",
      auth: "멤버",
      image: "",
      memberDescription: "아무거나 다 잘 먹어요.",
    },
  ];

  return (
    <EmotionWrapper>
      <div className="head">
        <span className="orgName">{name}</span>
        <span className="title">멤버 관리</span>
      </div>
      <div className="body">
        <div className="bodyTitle">
          <span className="subtitle">이 단체의 멤버</span>
          <Button variant="text">관리자 승계</Button>
        </div>
        <div className="restaurants">
          {memberList.map((data) => (
            <Member
              key={data.id}
              memberId={data.id}
              memberName={data.memberName}
              memberDescription={data.memberDescription}
            />
          ))}
        </div>
      </div>
    </EmotionWrapper>
  );
};

export default OrganizationMemberSection;

const EmotionWrapper = styled.div`
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

  div.restaurants {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    gap: 8px;

    margin-top: 20px;
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
