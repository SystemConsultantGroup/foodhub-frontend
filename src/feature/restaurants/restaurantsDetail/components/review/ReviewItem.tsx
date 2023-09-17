import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";
import Rating from "components/rating/Rating";
import IconEditFilledWhite from "components/icons/IconEditFilledWhite";
import Link from "next/link";

interface Props {
  restaurantId: string | number | string[];
  reviewId: number;
  userId: number;
  score: number;
  content: string;
  createdAt: Date;
}

const ReviewItem: React.FC<Props> = ({
  restaurantId,
  reviewId,
  userId,
  score,
  content,
  createdAt,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  const editLink = `/restaurants/${restaurantId}/review/${reviewId}/edit`;
  const displayContent =
    content.length > 100 && !isExpanded ? content.slice(0, 100) + "..." : content;

  /**
   * TODO 1: userId로 userInfo 불러오기
   */
  const userName = "홍길동";
  const ImgSrc = "/images/profile-image-default-1.png";

  /**
   * TODO 2: 현재 로그인된 유저 아이디 가져오기 (리뷰 수정 권한 확인용)
   */
  const currentUserId = 1;

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}/${month}/${day}`;
  };

  return (
    <EmotionWrapper>
      <div className="userInfoScoreDiv">
        <div className="userInfoDiv">
          <Image src={ImgSrc} alt={"유저 프로필 이미지"} width={30} height={30} />
          <span className="userName">{userName}</span>
          <span className="date">{formatDate(createdAt)}</span>
          {currentUserId === userId && (
            <Link href={editLink}>
              <IconEditFilledWhite />
            </Link>
          )}
        </div>
        <Rating value={score} />
      </div>
      <div className="contentDiv">
        <span>{displayContent}</span>
        {content.length > 100 && (
          <button onClick={toggleExpansion}>{isExpanded ? "접기" : "더 보기"}</button>
        )}
      </div>
    </EmotionWrapper>
  );
};

export default ReviewItem;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 6px;

  padding: 10px;

  .userInfoScoreDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .userInfoDiv {
      display: flex;
      gap: 8px;
      justify-content: center;
      align-items: center;

      span.userName {
        font-size: 16px;
        font-weight: 600;
        color: ${({ theme }) => theme.color.gray700};
      }
      span.date {
        font-size: 12px;
        font-weight: 300;
        color: ${({ theme }) => theme.color.gray300};
      }
    }
  }

  .contentDiv {
    span {
      line-height: 1.5;
      color: ${({ theme }) => theme.color.gray400};
      flex-grow: 1;
      margin-right: 8px;
    }

    button {
      color: ${({ theme }) => theme.color.gray300};
    }
  }
`;