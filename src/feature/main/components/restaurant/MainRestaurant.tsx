import styled from "@emotion/styled";
import Rating from "components/rating/Rating";
import Image from "next/image";
import { interactiveShadow } from "styles/shadow/interactiveShadow";

interface Props {
  imageSrc?: string;
}

const MainRestaurant = ({ imageSrc }: Props) => {
  const src = imageSrc ?? "/images/defaults/default-restaurant-image.png";

  return (
    <EmotionWrapper>
      <article>
        <Image src={src} width={200} height={100} alt="음식점 사진" />
        <div className="info-container">
          <h3>멘스시 천애부</h3>
          <p className="org-name">시스템 컨설턴트 그룹</p>
          <Rating value={3.25} className="rating" />
        </div>
      </article>
    </EmotionWrapper>
  );
};

export default MainRestaurant;

const EmotionWrapper = styled.div`
  article {
    border-radius: 8px;
    ${interactiveShadow};
    width: 200px;
    height: 200px;

    img {
      border-radius: 8px 8px 0 0;
    }

    .info-container {
      padding: 16px;

      h3 {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 8px;
      }

      p.org-name {
        font-size: 12px;
        color: ${({ theme }) => theme.color.gray400};
        margin-bottom: 8px;
      }

      .rating {
        float: right;
      }
    }
  }
`;
