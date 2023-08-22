import { FC, CSSProperties } from "react";
import Image from "next/image";

interface Props {
  size?: number;
  style?: CSSProperties;
}

const ManagementIcon: FC<Props> = ({ size = 12, style }) => {
  return (
    <Image
      width={size}
      height={size}
      alt="관리자 아이콘"
      src="/images/icons/location-gray.svg"
      style={style}
    />
  );
};

export default ManagementIcon;
