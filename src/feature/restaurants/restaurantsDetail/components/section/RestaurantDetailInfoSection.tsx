import styled from "@emotion/styled";
import Tags from "components/tag/Tags";
import { useRef } from "react";

interface Props {
  restaurantId: string | number | string[];
  comment: string;
  orderTip: string;
  capacity: number;
  recommendedMenus: string[];
  category: string;
  delivery: boolean;
  openingHour: string;
  characteristics: string[];
  totalScore: number;
  totalCount: number;
}

const RestaurantDetailInfoSection: React.FC<Props> = ({
  restaurantId,
  comment,
  orderTip,
  capacity,
  recommendedMenus,
  category,
  delivery,
  openingHour,
  characteristics,
  totalScore,
  totalCount,
}) => {
  const moveToReviewRef = useRef<HTMLSpanElement>(null);

  const scrollToBottom = () => {
    if (moveToReviewRef.current) {
      moveToReviewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <div className="infoBlockGrid">
        <div className="item">
          <span className="label">최대 수용 인원</span>
          <div className="info">
            <span className="infoData">{capacity}</span>
            <span className="measure">명</span>
          </div>
        </div>
        <div className="item">
          <span className="label">카테고리</span>
          <div className="info">
            <span className="infoData">{category}</span>
          </div>
        </div>
        <div className="item">
          <span className="label">추천 메뉴</span>
          <div className="recommendMenus">
            <Tags>
              {recommendedMenus.map((data, index) => (
                <Tags.Item key={index} textColor="primary600" backColor="primary200">
                  {data}
                </Tags.Item>
              ))}
            </Tags>
          </div>
        </div>
        <div className="item">
          <span className="label">평점</span>
          <div className="info scoreInfo">
            <div>
              <span className="infoData">{totalScore}</span>
              <span className="measure">/ 5</span>
            </div>

            <span className="reviewCount" ref={moveToReviewRef} onClick={scrollToBottom}>
              리뷰 {totalCount}개 &gt;
            </span>
          </div>
        </div>
      </div>
      <div className="infoTextContainer">
        <div className="infoTextGrid">
          <span className="item label">매장 운영시간</span>
          <span className="item infoData">{openingHour}</span>
        </div>
        <div className="infoTextGrid">
          <span className="item label">한줄평</span>
          <span className="item infoData">{comment}</span>
        </div>
        <div className="infoTextGrid">
          <span className="item label">주문팁</span>
          <span className="item infoData">{orderTip}</span>
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

  margin-bottom: 30px;

  .infoBlockGrid {
    display: grid;
    grid-template-rows: 100px 100px;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;

    .item {
      display: flex;
      flex-direction: column;
      padding: 10px;
      gap: 10px;
      background-color: ${({ theme }) => theme.color.white};
      border: 0.5px solid ${({ theme }) => theme.color.gray200};
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

      span.reviewCount {
        font-size: 12px;
        font-weight: 300;
        color: ${({ theme }) => theme.color.gray700};
      }

      div.scoreInfo {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        gap: 7.5px;
      }
    }

    .item:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 4;
    }

    .item:nth-child(2) {
      grid-column-start: 4;
      grid-column-end: 7;
    }

    .item:nth-child(3) {
      grid-column-start: 1;
      grid-column-end: 5;
    }

    .item:nth-child(4) {
      grid-column-start: 5;
      grid-column-end: 7;
    }
  }

  .infoTextContainer {
    display: flex;
    flex-direction: column;
    gap: 15px;

    margin: 0 10px;

    div.infoTextGrid {
      display: grid;
      grid-template-columns: 1fr 2.25fr;

      .item {
        line-height: 1.25;
        font-size: 14px;
      }

      span.label {
        font-weight: 300;
        color: ${({ theme }) => theme.color.gray400};
      }

      span.infoData {
        font-size: 14px;
        font-weight: 600;
        color: ${({ theme }) => theme.color.gray700};
      }
    }
  }
`;
