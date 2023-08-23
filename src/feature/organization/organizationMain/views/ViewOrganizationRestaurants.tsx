import styled from "@emotion/styled";
import Button from "components/button/Button";
import { FilterIcon } from "feature/organization/organizationMain/components/ButtonIcons";
import TempRestaurant from "feature/organization/organizationMain/components/TempRestaurant";

interface Props {
  organizationId: string | number | string[];
}

const ViewOrganizationRestaurants: React.FC<Props> = ({ organizationId }) => {
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
      <div className="restaurants">
        <TempRestaurant />
        <TempRestaurant />
        <TempRestaurant />
        <TempRestaurant />
        <TempRestaurant />
        <TempRestaurant />
        <TempRestaurant />
        <TempRestaurant />
      </div>
    </EmotionWrapper>
  );
};

export default ViewOrganizationRestaurants;

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
  }
`;
