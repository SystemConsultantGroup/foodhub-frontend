import { FC } from "react";
import Image from "next/image";

interface Props {
  size?: number;
}

const CheckIcon: FC<Props> = ({ size = 16 }) => {
  return (
    <Image
      width={size}
      height={size}
      alt="입력 완료 체크 아이콘"
      src="/images/icons/check-circle.svg"
    />
  );
};

export default CheckIcon;
