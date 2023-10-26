import { TReviewContent } from "feature/restaurants/restaurantsDetail/types/TReviewContent";

export interface TReviewPage {
  contents: TReviewContent[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  totalScore: number;
  scoreStatistics: number[];
}
