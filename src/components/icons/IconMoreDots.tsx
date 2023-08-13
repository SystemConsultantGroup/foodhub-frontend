import Image from "next/image";

interface Props {}

const IconMoreDots = ({}: Props) => {
  return (
    <Image src="/images/icons/icon-more-dots.svg" width={24} height={24} alt="더보기 아이콘" />
  );
};

export default IconMoreDots;
