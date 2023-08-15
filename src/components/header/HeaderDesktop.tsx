import styled from "@emotion/styled";
import ProfileImage from "components/profileImage/ProfileImage";

interface Props {}

const HeaderDesktop = ({}: Props) => {
  return (
    <EmotionWrapper>
      <div className="nav-content">
        {/* <Image src="/images/icons/arrow-left.svg" width={24} height={24} alt="왼쪽 화살표 아이콘" /> */}
        <h3>쩝쩝대학</h3>
        <ProfileImage />
      </div>
    </EmotionWrapper>
  );
};

export default HeaderDesktop;

const EmotionWrapper = styled.nav`
  ${({ theme }) => theme.device.mobile} {
    display: none;
  }

  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: ${({ theme }) => theme.size.mobile}px;
    margin: 0 auto;
  }
  width: 100%;
  /* height: 48px; */
  padding: 14px 24px;
  background-color: ${({ theme }) => theme.color.gray100};
  h3 {
    color: ${({ theme }) => theme.color.gray700};
    font-size: 18px;
    font-weight: 700;
  }
`;
