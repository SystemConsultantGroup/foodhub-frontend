import styled from "@emotion/styled";
import Rating from "components/rating/Rating";
import { TMainRestaurant } from "feature/main/types/TMainRestaurant";
import Image from "next/image";
import Link from "next/link";
import { interactiveShadow } from "styles/shadow/interactiveShadow";

type Props = TMainRestaurant;

const MainRestaurant = ({ id, imageSrc, restaurantName, orgName, rating }: Props) => {
  const src = imageSrc ?? "/images/defaults/default-restaurant-image.png";
  const restaurantLink = `/restaurants/${id}`;
  return (
    <EmotionWrapper>
      <Link href={restaurantLink}>
        <article>
          <Image src={src} width={200} height={100} alt="음식점 사진" />
          <div className="info-container">
            <h3>{restaurantName}</h3>
            <p className="org-name">{orgName}</p>
            <Rating value={rating} className="rating" />
          </div>
        </article>
      </Link>
    </EmotionWrapper>
  );
};

export default MainRestaurant;

const EmotionWrapper = styled.div`
  a {
    // TODO: resetAnchoeStyle 머지 후 제거
    all: unset;
    cursor: pointer;
  }

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
