import styled from "@emotion/styled";
import TempRestaurant from "feature/organization/organizationMain/components/TempRestaurant";
import Button from "components/button/Button";

interface Props {
  organizationId: string | number | string[];
}

const ViewOrganizationMember: React.FC<Props> = ({ organizationId }) => {
  /**
   * TODO: 서버에서 해당 단체의 메인 정보, 멤버 정보 받아오기
   */
  const name = "System Consultant Group"; // 서버에서 받아온 단체 이름
  const memberList = [
    { name: "홍길동", auth: "관리자", image: "" },
    { name: "김영희", auth: "멤버", image: "" },
    { name: "김철수", auth: "멤버", image: "" },
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
          {memberList.map((data, index) => (
            <TempRestaurant key={index} name={data.name} />
          ))}
        </div>
      </div>
    </EmotionWrapper>
  );
};

export default ViewOrganizationMember;

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
