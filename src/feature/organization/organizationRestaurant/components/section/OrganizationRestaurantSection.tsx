import styled from "@emotion/styled";
import TempRestaurant from "feature/organization/organizationMain/components/tempRestaurant/TempRestaurant";

interface Props {
  organizationId: string | number | string[];
}

const OrganizationRestaurantSection: React.FC<Props> = ({ organizationId }) => {
  /**
   * TODO: 서버에서 해당 단체의 메인 정보, 맛집 리스트 받아오기
   */
  const name = "System Consultant Group"; // 서버에서 받아온 단체 이름
  const restaurantList = [
    { name: "홍길동 갈비구이", area: "서울특별시 서대문구 홍제동", image: "" },
    { name: "홍길동 갈비구이", area: "서울특별시 서대문구 홍제동", image: "" },
    { name: "홍길동 갈비구이", area: "서울특별시 서대문구 홍제동", image: "" },
  ];

  return (
    <EmotionWrapper>
      <div className="head">
        <span className="orgName">{name}</span>
        <span className="title">맛집 관리</span>
      </div>
      <div className="body">
        <span className="subtitle">이 단체의 맛집</span>
        <div className="restaurants">
          {restaurantList.map((data, index) => (
            <TempRestaurant key={index} restaurantName={data.name} />
          ))}
        </div>
      </div>
    </EmotionWrapper>
  );
};

export default OrganizationRestaurantSection;

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

  div.restaurants {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 8px;

    margin-top: 20px;
  }

  span {
    width: 100%;
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
