import styled from "@emotion/styled";
import PopoverMemberMore from "components/dataDisplay/popover/PopoverMemberMore";
import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  open: boolean;
  onClose: () => void;
  memberId: number;
}

const IconMoreDots = ({ open, onClose, memberId, ...props }: Props) => {
  return (
    <EmotionWrapper {...props}>
      <Image src="/images/icons/icon-more-dots.svg" width={24} height={24} alt="더보기 아이콘" />
      {open && <PopoverMemberMore memberId={memberId} />}
    </EmotionWrapper>
  );
};

export default IconMoreDots;

export const EmotionWrapper = styled.button`
  position: relative;
`;
