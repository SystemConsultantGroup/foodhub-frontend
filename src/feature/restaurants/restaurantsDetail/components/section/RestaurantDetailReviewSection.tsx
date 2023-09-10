import styled from "@emotion/styled";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  reviewPage1,
  reviewPage2,
  reviewPage3,
} from "feature/restaurants/restaurantsDetail/mockups/reviews";
import { TReviewPage } from "feature/restaurants/restaurantsDetail/types/TReviewPage";
import ReviewItem from "feature/restaurants/restaurantsDetail/components/review/ReviewItem";
import Button from "components/button/Button";
import IconTogglePageLeft from "components/icons/IconTogglePageLeft";
import IconTogglePageRight from "components/icons/IconTogglePageRight";

interface Props {
  restaurantId: string | number | string[];
  userAuth: number;
  totalScore: number;
  totalCount: number;
  totalPages: number;
  scoreStatistics: number[]; // 별점 별 리뷰 개수 (별점 높은 순)
}

const RestaurantDetailReviewSection: React.FC<Props> = ({
  restaurantId,
  userAuth,
  totalScore,
  totalCount,
  totalPages,
  scoreStatistics,
}) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [reviewPage, setReviewPage] = useState<TReviewPage | null>(null);
  /**
   * TODO 1: 맛집의 페이지별 리뷰 조회하기 (pageSize : 5, pageNumber는 1부터 시작)
   */

  /**
   * TODO 2: 리뷰가 없는 경우
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
        <div className="scoreStatisticsDiv">
          {scoreStatistics.map((count, index) => (
            <div key={index} className="scoreStatisticsItem">
              <span>{count}개</span>
              <div>{5 - index}점 score 컴포넌트</div>
            </div>
          ))}
        </div>
      </div>
      <div className="reviewDiv">
        {reviewPage?.contents.map((review) => (
          <ReviewItem
            key={review.id}
            reviewId={review.id}
            userId={review.userId}
            content={review.content}
            score={review.score}
            createdAt={review.createdAt}
          />
        ))}
      </div>
      <div className="togglePageDiv">
        <Button icon={<IconTogglePageLeft />} variant="text" onClick={handlePageNumberOnClick} />
        <span>{pageNumber}</span>
        <Button icon={<IconTogglePageRight />} variant="text" onClick={handlePageNumberOnClick} />
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
    background-color: ${({ theme }) => theme.color.primary100};
    padding: 5px 30px;
    border-radius: 6px;

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
        color: ${({ theme }) => theme.color.primary500};
      }
    }

    div.scoreStatisticsDiv {
      display: flex;
      flex-direction: column;
      gap: 8px;

      font-size: 14px;
      font-weight: 300;
      color: ${({ theme }) => theme.color.primary500};

      div.scoreStatisticsItem {
        display: flex;
        justify-content: right;
        align-items: center;
        gap: 15px;
      }
    }
  }

  .reviewDiv {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .togglePageDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    span {
      font-size: 18px;
      color: ${({ theme }) => theme.color.gray500};
    }
  }
`;
