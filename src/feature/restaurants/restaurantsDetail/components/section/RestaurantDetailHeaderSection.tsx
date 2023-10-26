import styled from "@emotion/styled";
import RestaurantExternalLinkIcon from "feature/restaurants/restaurantsDetail/components/icons/RestaurantExternalLinkIcon";
import Link from "next/link";

interface Props {
  restaurantId: string;
  userAuth?: number;
  restaurantName: string;
  restaurantAddress: string;
  organizationName: string;
  link?: string;
  isMain?: boolean;
}

const RestaurantDetailHeaderSection: React.FC<Props> = ({
  restaurantId,
  userAuth,
  restaurantName,
  restaurantAddress,
  organizationName,
  link,
  isMain = true,
}) => {
  return (
    <EmotionWrapper>
      <div className="over-title-div">
        <span className="subtitle">{organizationName}</span>
        {isMain &&
          (userAuth === 0 || userAuth === 1 ? (
            <Link className="link-div" href={"/restaurants/" + restaurantId + "/edit"}>
              맛집 수정
            </Link>
          ) : (
            <Link className="link-div" href={"/restaurants/" + restaurantId + "/copy"}>
              맛집 수정
            </Link>
          ))}
      </div>
      <h1 className="title">{restaurantName}</h1>
      <div className="under-title-div">
        <span className="subtitle">{restaurantAddress}</span>
        {link && (
          <Link className="link-div" href={link}>
            <RestaurantExternalLinkIcon />
            <span className="link-span">맛집 상세 정보 &gt;</span>
          </Link>
        )}
      </div>
    </EmotionWrapper>
  );
};

export default RestaurantDetailHeaderSection;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: left;
  gap: 8px;

  span {
    font-weight: 300;
    margin-left: 2px;
    font-size: 16px;
    color: ${({ theme }) => theme.color.gray600};
  }

  span.subtitle {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.gray300};
  }

  .title {
    font-size: 30px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.gray700};
  }

  .under-title-div,
  .over-title-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .link-div {
    display: flex;
    justify-content: right;
    align-items: center;
    text-decoration-line: none;

    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.gray700};
  }

  .link-span {
    font-size: 12px;
    font-weight: 300;
    color: ${({ theme }) => theme.color.gray500};
  }
`;
