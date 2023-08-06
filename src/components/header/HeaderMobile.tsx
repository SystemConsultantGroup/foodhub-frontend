import styled from "@emotion/styled";
import ProfileImage from "components/profileImage/ProfileImage";
import Image from "next/image";

interface Props {}

const HeaderMobile = ({}: Props) => {
  return (
    <EmotionWrapper>
      <Image src="/images/icons/arrow-left.svg" width={24} height={24} alt="왼쪽 화살표 아이콘" />
      <h3>푸드허브</h3>
      <ProfileImage />
    </EmotionWrapper>
  );
};

export default HeaderMobile;

const EmotionWrapper = styled.div`
  ${({ theme }) => theme.device.pc} {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 9px 24px;
  h3 {
    color: ${({ theme }) => theme.color.gray700};
    font-size: 18px;
    font-weight: 700;
  }
`;
