import styled from "@emotion/styled";
import Hero from "components/header/Hero";
import HeaderMobile from "components/header/HeaderMobile";
import Navbar from "components/navbar/Navbar";
import { LAYOUT_MARGIN } from "constant/layoutMargin";
import { NAVBAR_HEIGHT } from "constant/navbarHeight";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  showHero?: boolean;
}

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <EmotionWrapper>
      {showHero && <Hero />}
      <HeaderMobile />
      <main>{children}</main>
      <Navbar />
    </EmotionWrapper>
  );
};

export default Layout;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  main {
    padding: ${LAYOUT_MARGIN};
    padding-top: 48px;
    padding-bottom: ${NAVBAR_HEIGHT}px;
    max-width: 768px;
  }
`;
