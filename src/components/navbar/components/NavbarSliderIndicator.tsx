import styled from "@emotion/styled";

interface Props {
  activeMenuIndex: number;
}

const NavbarSliderIndicator = ({ activeMenuIndex }: Props) => {
  return <EmotionWrapper activeMenuIndex={activeMenuIndex} />;
};

export default NavbarSliderIndicator;

const EmotionWrapper = styled.div<Props>`
  position: absolute;

  transition: left 0.2s ease-in-out;

  top: 0;
  width: 80px;
  left: ${({ activeMenuIndex }) => activeMenuIndex * 80}px;

  ${({ theme }) => theme.device.fold} {
    width: 60px;
    left: ${({ activeMenuIndex }) => activeMenuIndex * 60}px;
  }
  height: 4px;
  background-color: ${({ theme }) => theme.color.primary500};
  border-radius: 0 0 6px 6px;
`;
