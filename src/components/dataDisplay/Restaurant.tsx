import Image from "next/image";
import styled from "@emotion/styled";
import { textEllipsis } from "styles/ellipsis/textEllipsis";
import DefaultRestaurantIcon from "components/dataDisplay/defaults/DefaultRestaurantIcon";
import IconEditFilled from "components/icons/IconEditFilled";
import IconTrashFilled from "components/icons/IconTrashFilled";
import Link from "next/link";

interface Props {
  imageSrc?: string;
  restaurantId: number;
  restaurantName: string;
  restaurantLocation: string;
}

const Restaurant = ({ imageSrc, restaurantId, restaurantName, restaurantLocation }: Props) => {
  const alt = `${restaurantName} 맛집 대표 이미지`;
  const editLink = `/restaurants/${restaurantId}/edit`; // TODO: 링크 수정
  const hasEditOrDeleteAuth = true; // TODO: 권한 확인

  const handleClickDeleteRestaurant = () => {
    alert("맛집 삭제");
  };

  return (
    <EmotionWrapper>
      {imageSrc ? (
        <Image
          className="restaurant-profile-image"
          src={imageSrc}
          width={40}
          height={40}
          alt={alt}
        />
      ) : (
        <DefaultRestaurantIcon />
      )}
      <div className="restaurant-info">
        <p className="restaurant-name">{restaurantName}</p>
        <p className="restaurant-description">{restaurantLocation}</p>
      </div>
      {hasEditOrDeleteAuth && (
        <div className="restaurant-action-button-container">
          <Link href={editLink}>
            <IconEditFilled />
          </Link>
          <button onClick={handleClickDeleteRestaurant}>
            <IconTrashFilled />
          </button>
        </div>
      )}
    </EmotionWrapper>
  );
};

export default Restaurant;

const EmotionWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 14px 20px;
  border-radius: 6px;
  transition: background-color 0.3s ease-in-out;
  color: ${({ theme }) => theme.color.white};

  background-color: ${({ theme }) => theme.color.primary600};

  &:hover {
    background-color: ${({ theme }) => theme.color.primary500};
  }

  .restaurant-profile-image {
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.shadow.default};
  }

  .restaurant-info {
    flex: 1;
    overflow: hidden;
    margin-left: 16px;

    .restaurant-name {
      font-size: 18px;
      font-weight: 700;
      color: ${({ theme }) => theme.color.white};
      margin-bottom: 3px;
      ${textEllipsis}
    }

    .restaurant-description {
      font-size: 12px;
      font-weight: 400;
      color: ${({ theme }) => theme.color.primary100};
      ${textEllipsis}
    }
  }

  .restaurant-action-button-container {
    display: flex;
    align-items: center;
    justify-content: center;

    column-gap: 10px;
  }
`;
