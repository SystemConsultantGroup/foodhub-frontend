import { FC, CSSProperties } from "react";
import Image from "next/image";

interface Props {
  size?: number;
  style?: CSSProperties;
}

const DropUpIcon: FC<Props> = ({ size = 16, style }) => {
  return (
    <Image
      width={size}
      height={size}
      alt="drop up 아이콘"
      src="/images/icons/dropdown-up-line.svg"
      style={style}
    />
  );
};

export default DropUpIcon;
