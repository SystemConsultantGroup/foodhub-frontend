import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";
import Button from "components/button/Button";

interface Props {
  imgSrcList: string[];
}

const RestaurantDetailImgSection: React.FC<Props> = ({ imgSrcList }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleOnClickRight = () => {
    setCurrentImgIndex((currentImgIndex) =>
      currentImgIndex == imgSrcList.length - 1 ? 0 : currentImgIndex + 1
    );
  };

  const handleOnClickLeft = () => {
    setCurrentImgIndex((currentImgIndex) =>
      currentImgIndex == 0 ? imgSrcList.length - 1 : currentImgIndex - 1
    );
  };

  return (
    <EmotionWrapper>
      {imgSrcList.length === 0 ? (
        <Image
          className="restaurant-img"
          alt="맛집 기본 이미지"
          src={"/images/defaults/default-restaurant-image.png"}
          fill
        />
      ) : (
        <Image
          className="restaurant-img"
          alt="맛집 이미지"
          src={imgSrcList[currentImgIndex]}
          fill
        />
      )}
      <Button
        onClick={handleOnClickLeft}
        variant="text"
        style={{
          backgroundColor: "transparent",
          zIndex: "10",
          position: "absolute",
          left: "0px",
        }}
      >
        &lt;
      </Button>
      <Button
        onClick={handleOnClickRight}
        variant="text"
        className="right-button"
        style={{
          backgroundColor: "transparent",
          zIndex: "10",
          position: "absolute",
          right: "0px",
        }}
      >
        &gt;
      </Button>
    </EmotionWrapper>
  );
};

export default RestaurantDetailImgSection;

const EmotionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  overflow: hidden;
  margin-bottom: 10px;

  .restaurant-img {
    z-index: 1;
    object-fit: cover;
    position: absolute;
  }
`;
