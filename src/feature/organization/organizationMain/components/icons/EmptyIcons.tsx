import { FC, CSSProperties } from "react";
import Image from "next/image";

interface Props {
  size?: number;
  style?: CSSProperties;
}

export const EmptyRestaurantMemberIcon: FC<Props> = ({ size = 40, style }) => {
  return (
    <Image
      width={size}
      height={size}
      alt="단체에 등록된 맛집이 없을 때 구성원에게 나타나는 아이콘"
      src="/images/icons/empty-member.svg"
      style={style}
    />
  );
};

export const EmptyRestaurantVisitorIcon: FC<Props> = ({ size = 40, style }) => {
  return (
    <Image
      width={size}
      height={size}
      alt="단체에 등록된 맛집이 없을 때 방문객에게 나타나는 아이콘"
      src="/images/icons/empty-visitor.svg"
      style={style}
    />
  );
};
