import styled from "@emotion/styled";
import IconStarFilled from "components/rating/icons/IconStarFilled";
import IconStarHalf from "components/rating/icons/IconStarHalf";
import IconStarOutlined from "components/rating/icons/IconStarOutlined";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  value: number; // 0 ~ 5 사이의 숫자, 별 개수는 가장 가까운 0.5 단위로 반올림
}

const Rating = ({ value, ...props }: Props) => {
  // round value to the nearest 0.5
  const startCount = Math.round(value * 2) / 2;

  const filledStarCount = Math.floor(startCount);
  const hasHalfStar = startCount % 1 !== 0;
  const emptyStarCount = 5 - filledStarCount - (hasHalfStar ? 1 : 0);

  return (
    <EmotionWrapper {...props}>
      <div className="star-container">
        {Array.from({ length: filledStarCount }, (_, index) => (
          <IconStarFilled key={index} />
        ))}
        {hasHalfStar && <IconStarHalf />}
        {Array.from({ length: emptyStarCount }, (_, index) => (
          <IconStarOutlined key={index} />
        ))}
      </div>
      <p className="rating-value">{value}</p>
    </EmotionWrapper>
  );
};

export default Rating;

const EmotionWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;

  .star-container {
    display: flex;
    column-gap: 2px;
  }

  .rating-value {
    font-size: 12px;
    color: ${({ theme }) => theme.color.gray400};
  }
`;
