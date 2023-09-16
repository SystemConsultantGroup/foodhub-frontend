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

  top: 0;
  left: ${({ activeMenuIndex }) => activeMenuIndex * 100}px;

  transition: left 0.2s ease-in-out;

  width: 100px;
  height: 4px;
  background-color: ${({ theme }) => theme.color.primary500};
  border-radius: 0 0 6px 6px;
`;
