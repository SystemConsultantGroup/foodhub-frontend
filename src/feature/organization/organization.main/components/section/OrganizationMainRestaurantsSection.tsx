import styled from "@emotion/styled";
import Button from "components/button/Button";
import { FilterIcon } from "feature/organization/organization.main/components/icons/ButtonIcons";
import Restaurant from "components/dataDisplay/Restaurant";
import {
  EmptyRestaurantMemberIcon,
  EmptyRestaurantVisitorIcon,
} from "feature/organization/organization.main/components/icons/EmptyIcons";

interface Props {
  organizationId: number;
  userAuth: number;
}

const OrganizationMainRestaurantsSection: React.FC<Props> = ({ organizationId, userAuth }) => {
  /**
   * TODO: organizationId에 해당하는 단체의 맛집 리스트 받아오기
   */
  const restaurants = [
    { restaurantId: 1, restaurantName: "봉수육", restaurantLocation: "경기도 수원시 율전동" },
    { restaurantId: 2, restaurantName: "봉수육", restaurantLocation: "경기도 수원시 율전동" },
    { restaurantId: 3, restaurantName: "봉수육", restaurantLocation: "경기도 수원시 율전동" },
    { restaurantId: 4, restaurantName: "봉수육", restaurantLocation: "경기도 수원시 율전동" },
    { restaurantId: 5, restaurantName: "봉수육", restaurantLocation: "경기도 수원시 율전동" },
    { restaurantId: 6, restaurantName: "봉수육", restaurantLocation: "경기도 수원시 율전동" },
  ];

  return (
    <EmotionWrapper>
      <div className="head">
        <span>이 단체의 맛집</span>
        <div className="filterButtons">
          <Button variant="secondary">최신순</Button>
          <Button variant="secondary" icon={<FilterIcon />}>
            필터 설정
          </Button>
        </div>
      </div>
      {restaurants.length === 0 ? (
        <div>
          {userAuth === 0 || userAuth === 1 ? (
            <div className="emptyDiv">
              <EmptyRestaurantMemberIcon />
              <p>이 단체에 등록된 맛집이 없네요.</p>
              <p>내가 이 단체의 첫 번째 맛집을 추가해 볼까요?</p>
              <Button>첫 번째 맛집 등록하기</Button>
            </div>
          ) : (
            <div className="emptyDiv">
              <EmptyRestaurantVisitorIcon />
              <p>이 단체에 등록된 맛집이 없네요.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="restaurants">
          {restaurants.map((data) => (
            <Restaurant
              key={data.restaurantId}
              restaurantId={data.restaurantId}
              restaurantName={data.restaurantName}
              restaurantLocation={data.restaurantLocation}
            />
          ))}
        </div>
      )}
    </EmotionWrapper>
  );
};

export default OrganizationMainRestaurantsSection;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0px 10px;
  margin-top: 20px;

  div.head {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;

    justify-content: space-between;
    align-items: center;

    span {
      color: ${({ theme }) => theme.color.gray700};
      font-size: 18px;
      font-weight: 600;
    }

    div.filterButtons {
      display: flex;
      gap: 10px;
    }
  }

  div.restaurants {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .link {
      text-decoration-line: none;
    }
  }

  div.emptyDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    padding: 50px 0px;

    p {
      font-size: 16px;
      font-weight: 600;
      color: ${({ theme }) => theme.color.gray700};
    }
  }
`;
