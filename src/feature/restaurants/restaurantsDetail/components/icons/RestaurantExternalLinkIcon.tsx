import { FC, CSSProperties } from "react";
import Image from "next/image";

interface Props {
  size?: number;
  style?: CSSProperties;
}

const RestaurantExternalLinkIcon: FC<Props> = ({ size = 12, style }) => {
  return (
    <Image
      width={size}
      height={size}
      alt="맛집 외부 링크 아이콘"
      src="/images/icons/external-link.svg"
      style={style}
    />
  );
};

export default RestaurantExternalLinkIcon;
