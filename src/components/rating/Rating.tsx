import styled from "@emotion/styled";
import IconStarFilled from "components/rating/icons/IconStarFilled";
import IconStarHalf from "components/rating/icons/IconStarHalf";
import IconStarOutlined from "components/rating/icons/IconStarOutlined";
import { HTMLAttributes, useEffect, useState } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  value: number; // 0 ~ 5 사이의 숫자, 별 개수는 가장 가까운 0.5 단위로 반올림
  isInput?: boolean; // input 기능을 하도록 할 지 설정
  onSelectedValueChange?: (value: number) => void;
}

const Rating = ({ value, isInput = false, onSelectedValueChange, ...props }: Props) => {
  const [selectedValue, setSelectedValue] = useState<number>(value);

  // round value to the nearest 0.5
  const startCount = Math.round(selectedValue * 2) / 2;

  const filledStarCount = Math.floor(startCount);
  const hasHalfStar = startCount % 1 !== 0;
  const emptyStarCount = 5 - filledStarCount - (hasHalfStar ? 1 : 0);

  useEffect(() => {
    if (onSelectedValueChange) {
      onSelectedValueChange(selectedValue);
    }
  }, [selectedValue, onSelectedValueChange]);

  const handleOnClick = (event: React.MouseEvent, index: number) => {
    const clickX = event.nativeEvent.clientX; // 클릭한 위치의 X 좌표

    // IconStar... 컴포넌트 내에서 클릭한 위치를 기준으로 왼쪽 또는 오른쪽 판별
    const containerRect = event.currentTarget.getBoundingClientRect();
    const containerCenterX = (containerRect.left + containerRect.right) / 2;

    if (clickX < containerCenterX) {
      setSelectedValue(index + 0.5);
    } else {
      setSelectedValue(index + 1);
    }
  };

  return (
    <EmotionWrapper isInput={isInput} {...props}>
      <div className="star-container">
        {Array.from({ length: filledStarCount }, (_, index) =>
          isInput ? (
            <IconStarFilled
              key={index}
              size={40}
              onClick={(event: React.MouseEvent) => handleOnClick(event, index)}
            />
          ) : (
            <IconStarFilled key={index} />
          )
        )}
        {hasHalfStar &&
          (isInput ? (
            <IconStarHalf
              size={40}
              onClick={(event: React.MouseEvent) => handleOnClick(event, filledStarCount)}
            />
          ) : (
            <IconStarHalf />
          ))}
        {Array.from({ length: emptyStarCount }, (_, index) =>
          isInput ? (
            <IconStarOutlined
              key={index}
              size={40}
              onClick={(event: React.MouseEvent) =>
                handleOnClick(event, filledStarCount + index + (hasHalfStar ? 1 : 0))
              }
            />
          ) : (
            <IconStarOutlined key={index} />
          )
        )}
      </div>
      {isInput ? (
        <div>
          <span className="rating-value-selected">{selectedValue}</span>
          <span className="rating-full-marks"> / 5</span>
        </div>
      ) : (
        <p className="rating-value">{value}</p>
      )}
    </EmotionWrapper>
  );
};

export default Rating;

const EmotionWrapper = styled.div<{ isInput: boolean }>`
  display: flex;
  align-items: center;
  ${({ isInput }) => (isInput ? "flex-direction: column; gap: 20px;" : "column-gap: 4px;")}

  .star-container {
    display: flex;
    column-gap: 2px;
  }

  color: ${({ theme }) => theme.color.gray400};

  .rating-full-marks {
    font-size: 16px;
    font-weight: 300;
  }

  .rating-value-selected {
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.gray700};
  }

  .rating-value {
    font-size: 12px;
  }
`;
