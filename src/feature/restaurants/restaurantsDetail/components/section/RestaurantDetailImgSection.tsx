import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";
import Button from "components/button/Button";

interface Props {
  imgSrcList: string[];
}

const RestaurantDetailImgSection: React.FC<Props> = ({ imgSrcList }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleOnClick = () => {
    setCurrentImgIndex((currentImgIndex) => currentImgIndex + 1);
  };

  return (
    <EmotionWrapper>
      {imgSrcList.length === 0 ? (
        <Image
          className="restaurantImg"
          alt="맛집 기본 이미지"
          src={"/images/defaults/default-restaurant-image.png"}
          fill={true}
        />
      ) : (
        <Image alt="맛집 이미지" src={imgSrcList[currentImgIndex]} />
      )}
      <Button onClick={handleOnClick}>{currentImgIndex}</Button>
    </EmotionWrapper>
  );
};

export default RestaurantDetailImgSection;

const EmotionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  .restaurantImg {
    object-fit: cover;
  }
`;
