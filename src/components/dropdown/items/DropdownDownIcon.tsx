import { FC, CSSProperties } from "react";
import Image from "next/image";

interface Props {
  size?: number;
  style?: CSSProperties;
}

const DropDownIcon: FC<Props> = ({ size = 16, style }) => {
  return (
    <Image
      width={size}
      height={size}
      alt="drop down 아이콘"
      src="/images/icons/dropdown-down-line.svg"
      style={style}
    />
  );
};

export default DropDownIcon;
