import styled from "@emotion/styled";
import Tags from "components/tag/Tags";

interface Props {
  restaurantId: string | number | string[];
  comment: string;
  orderTip: string;
  capacity: number;
  recommendedMenus: string[];
  categoryId: number;
  delivery: boolean;
  openingHour: string;
  characteristics: string[];
}

const RestaurantDetailInfoSection: React.FC<Props> = ({
  restaurantId,
  comment,
  orderTip,
  capacity,
  recommendedMenus,
  categoryId,
  delivery,
  openingHour,
  characteristics,
}) => {
  return (
    <EmotionWrapper>
      <Tags>
        {delivery && <Tags.Item>배달 가능</Tags.Item>}
        {characteristics.map((data, index) => (
          <Tags.Item key={index} outLined={true} textColor="primary600" backColor="white">
            {data}
          </Tags.Item>
        ))}
      </Tags>
      <div className="infoBlocksContainer">
        <div className="item">
          <span className="label">최대 수용 인원</span>
          <div className="info">
            <span className="infoData">{capacity}</span>
            <span className="measure">명</span>
          </div>
        </div>
        <div className="item">
          <span className="label">매장 운영시간</span>
          <div className="info">
            <span className="openingHour">{openingHour}</span>
          </div>
        </div>
        <div className="item">
          <span className="label">추천 메뉴</span>
          <div className="recommendMenus"></div>
        </div>
        <div className="item">
          <span className="label">카테고리</span>
        </div>
      </div>
    </EmotionWrapper>
  );
};

export default RestaurantDetailInfoSection;

const EmotionWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: left;
  gap: 15px;

  div.infoBlocksContainer {
    display: grid;
    grid-template-rows: 90px 100px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

    .item {
      display: flex;
      flex-direction: column;
      padding: 10px;
      gap: 10px;
      background-color: ${({ theme }) => theme.color.gray100};
      border-radius: 6px;

      span.label {
        font-size: 12px;
        font-weight: 300;
        line-height: 1.5;
        color: ${({ theme }) => theme.color.gray300};
      }

      div.info {
        display: flex;
        justify-content: right;
        align-items: baseline;
        gap: 4px;

        color: ${({ theme }) => theme.color.gray700};
      }

      span.infoData {
        font-size: 32px;
        font-weight: 500;
      }

      span.measure {
        font-size: 16px;
        font-weight: 300;
      }

      span.openingHour {
        font-size: 20px;
        font-weight: 500;
        text-align: right;
      }
    }
  }
`;
