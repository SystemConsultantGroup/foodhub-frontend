import styled from "@emotion/styled";
import RestaurantExternalLinkIcon from "feature/restaurants/restaurantsDetail/components/icons/RestaurantExternalLinkIcon";
import Link from "next/link";

interface Props {
  restaurantId: string | number | string[];
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
      <div className="overTitleDiv">
        <span className="subtitle">{organizationName}</span>
        {isMain &&
          (userAuth === 0 || userAuth === 1 ? (
            <Link className="linkDiv" href={"/restaurants/" + restaurantId + "/edit"}>
              맛집 수정
            </Link>
          ) : (
            <Link className="linkDiv" href={"/restaurants/" + restaurantId + "/copy"}>
              맛집 수정
            </Link>
          ))}
      </div>
      <span className="title">{restaurantName}</span>
      <div className="underTitleDiv">
        <span className="subtitle">{restaurantAddress}</span>
        {link && (
          <Link className="linkDiv" href={link}>
            <RestaurantExternalLinkIcon />
            <span className="linkSpan">맛집 상세 정보 &gt;</span>
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

  span.title {
    font-size: 30px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.gray700};
  }

  .underTitleDiv,
  .overTitleDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .linkDiv {
    display: flex;
    justify-content: right;
    align-items: center;
    text-decoration-line: none;

    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.gray700};
  }

  .linkSpan {
    font-size: 12px;
    font-weight: 300;
    color: ${({ theme }) => theme.color.gray500};
  }
`;