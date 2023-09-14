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
  const [filledStarCount, setFilledStarCount] = useState<number>(0);
  const [emptyStarCount, setEmptyStarCount] = useState<number>(0);
  const [hasHalfStar, setHasHalfStar] = useState<boolean>(false);

  // round value to the nearest 0.5

  useEffect(() => {
    const startCount = Math.round(selectedValue * 2) / 2;
    setHasHalfStar(startCount % 1 !== 0);
    setFilledStarCount(Math.floor(startCount));
    setEmptyStarCount(5 - filledStarCount - (hasHalfStar ? 1 : 0));

    if (onSelectedValueChange) {
      onSelectedValueChange(selectedValue);
    }
  }, [selectedValue, value, filledStarCount, hasHalfStar, onSelectedValueChange]);

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
              size={50}
              onClick={(event: React.MouseEvent) => handleOnClick(event, index)}
            />
          ) : (
            <IconStarFilled key={index} />
          )
        )}
        {hasHalfStar &&
          (isInput ? (
            <IconStarHalf
              size={50}
              onClick={(event: React.MouseEvent) => handleOnClick(event, filledStarCount)}
            />
          ) : (
            <IconStarHalf />
          ))}
        {Array.from({ length: emptyStarCount }, (_, index) =>
          isInput ? (
            <IconStarOutlined
              key={index}
              size={50}
              onClick={(event: React.MouseEvent) =>
                handleOnClick(event, filledStarCount + index + (hasHalfStar ? 1 : 0))
              }
            />
          ) : (
            <IconStarOutlined key={index} />
          )
        )}
      </div>
      <p className="rating-value">{selectedValue}</p>
    </EmotionWrapper>
  );
};

export default Rating;

const EmotionWrapper = styled.div<{ isInput: boolean }>`
  display: flex;
  align-items: center;
  column-gap: ${({ isInput }) => (isInput ? "10px" : "4px")};

  .star-container {
    display: flex;
    column-gap: 2px;
  }

  .rating-value {
    font-size: ${({ isInput }) => (isInput ? "30px" : "12px")};
    color: ${({ theme }) => theme.color.gray400};
  }
`;
