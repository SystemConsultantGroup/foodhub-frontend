import styled from "@emotion/styled";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  reviewPage1,
  reviewPage2,
  reviewPage3,
} from "feature/restaurants/restaurantsDetail/mockups/reviews";
import { TReviewPage } from "feature/restaurants/restaurantsDetail/types/TReviewPage";
import Button from "components/button/Button";

interface Props {
  restaurantId: string | number | string[];
  userAuth: number;
  totalScore: number;
  totalCount: number;
  totalPages: number;
}

const RestaurantDetailReviewSection: React.FC<Props> = ({
  restaurantId,
  userAuth,
  totalScore,
  totalCount,
  totalPages,
}) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [reviewPage, setReviewPage] = useState<TReviewPage | null>(null);
  /**
   * TODO 1: 맛집의 페이지별 리뷰 조회하기 (pageSize : 5, pageNumber는 1부터 시작)
   */

  /**
   * TODO 2: 리뷰가 없는 경우
   */

  /**
   * 임시 코드 (리뷰 페이지 전환용)
   */
  const handlePageNumberOnClick = () => {
    if (pageNumber === totalPages) {
      setPageNumber(1);
    } else {
      setPageNumber((pageNumber) => pageNumber + 1);
    }
  };

  useEffect(() => {
    /**
     * 임시 코드 (페이지별 리뷰 조회)
     */
    switch (pageNumber) {
      case 1:
        setReviewPage(reviewPage1);
        break;
      case 2:
        setReviewPage(reviewPage2);
        break;
      case 3:
        setReviewPage(reviewPage3);
        break;
      default:
        setReviewPage(null);
    }
  }, [pageNumber]);

  return (
    <EmotionWrapper>
      <div className="titleDiv">
        <span>우리 멤버들이 남긴 리뷰</span>
        {(userAuth === 0 || userAuth === 1) && (
          <Link className="linkDiv" href={"/retaurants/" + restaurantId + "/review/create"}>
            리뷰 작성하기 &gt;
          </Link>
        )}
      </div>
      <div className="reviewOverviewDiv">
        <div className="totalInfo">
          <div>
            <span className="totalScoreInfo">{totalScore}</span>
            <span className="measure">/ 5</span>
          </div>
          <span className="totalReviewInfo">총 {totalCount}개의 리뷰</span>
        </div>
        <div className="scoreReviewCountInfo"></div>
      </div>
      <div className="reviewDiv">
        {reviewPage?.contents.map((review) => <div key={review.id}></div>)}
        <Button onClick={handlePageNumberOnClick}>{pageNumber}</Button>
      </div>
    </EmotionWrapper>
  );
};

export default RestaurantDetailReviewSection;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 10px;
  gap: 20px;

  .titleDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 16px;
      font-weight: 600;
      color: ${({ theme }) => theme.color.gray700};
    }
  }

  .linkDiv {
    display: flex;
    justify-content: right;
    align-items: center;
    text-decoration-line: none;

    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.gray700};
  }

  .reviewOverviewDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 120px;
    background-color: ${({ theme }) => theme.color.gray100};
    padding: 5px 30px;

    div.totalInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6px;

      span.totalScoreInfo {
        font-size: 36px;
        font-weight: 500;
        color: ${({ theme }) => theme.color.gray700};
      }

      span.measure {
        font-size: 16px;
        font-weight: 300;
        color: ${({ theme }) => theme.color.gray700};
      }

      span.totalReviewInfo {
        font-size: 12px;
        font-weight: 300;
        color: ${({ theme }) => theme.color.gray300};
      }
    }
  }
`;
