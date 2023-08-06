import styled from "@emotion/styled";
import Header from "components/header/Header";
import Navbar from "components/navbar/Navbar";
import { NAVBAR_HEIGHT } from "constant/navbarHeight";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <EmotionWrapper>
      <Header />
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
    padding-bottom: ${NAVBAR_HEIGHT}px;
  }
`;
