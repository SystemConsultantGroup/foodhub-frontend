import { FC } from "react";
import Image from "next/image";

interface Props {
  size?: number;
}

const DeleteIcon: FC<Props> = ({ size = 16 }) => {
  return (
    <Image width={size} height={size} alt="삭제 아이콘" src="/images/icons/x-button-filled.svg" />
  );
};

export default DeleteIcon;
