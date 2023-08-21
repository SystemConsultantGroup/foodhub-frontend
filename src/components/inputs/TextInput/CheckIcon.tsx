import { FC, CSSProperties } from "react";
import Image from "next/image";

interface Props {
  size?: number;
  style?: CSSProperties;
}

const CheckIcon: FC<Props> = ({ size = 16, style }) => {
  return (
    <Image
      width={size}
      height={size}
      alt="입력 완료 체크 아이콘"
      src="/images/icons/check-circle.svg"
      style={style}
    />
  );
};

export default CheckIcon;
