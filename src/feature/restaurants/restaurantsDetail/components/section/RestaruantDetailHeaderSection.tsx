import styled from "@emotion/styled";
import RestaurantExternalLinkIcon from "feature/restaurants/restaurantsDetail/components/icons/RestaurantExternalLinkIcon";
import Link from "next/link";
import Button from "components/button/Button";

interface Props {
  restaurantId: string | number | string[];
  userAuth: number;
  restaurantName: string;
  restaurantAddress: string;
  comment: string;
  organizationName: string;
  link: string;
}

const RestaurantDetailHeaderSection: React.FC<Props> = ({
  restaurantId,
  userAuth,
  restaurantName,
  restaurantAddress,
  comment,
  organizationName,
  link,
}) => {
  return (
    <EmotionWrapper>
      <div className="overTitleDiv">
        <span className="subtitle">{organizationName}</span>
        {userAuth === 0 || userAuth === 1 ? (
          <Button variant="text">맛집 수정</Button>
        ) : (
          <Button variant="text">맛집 복사</Button>
        )}
      </div>
      <span className="title">{restaurantName}</span>
      <div className="underTitleDiv">
        <span className="subtitle">{restaurantAddress}</span>
        <Link className="externalLinkDiv" href={link}>
          <RestaurantExternalLinkIcon />
          <span className="externalLink">맛집 상세 정보 &gt;</span>
        </Link>
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
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.gray700};
  }

  div.underTitleDiv,
  div.overTitleDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      font-size: 12px;
    }
  }

  .externalLinkDiv {
    display: flex;
    justify-content: right;
    align-items: center;
    text-decoration-line: none;
  }

  span.externalLink {
    font-size: 12px;
    font-weight: 300;
    color: ${({ theme }) => theme.color.gray500};
  }
`;
