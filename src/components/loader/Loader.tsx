import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  size?: number;
}

const Loader: React.FC<Props> = ({ size = 14 }) => {
  const loaderStyle = {
    width: size,
    height: size,
  };
  return (
    <LoaderWrapper css={loaderStyle}>
      <LoaderBefore />
      <LoaderAfter />
    </LoaderWrapper>
  );
};

export default Loader;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const prixClipFixAnimation = keyframes`
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  75%,
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
`;

const LoaderWrapper = styled.div`
  border-radius: 50%;
  position: relative;
  animation: ${rotateAnimation} 1s linear infinite;
`;

const LoaderBefore = styled.div`
  content: "";
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  border-radius: 50%;
  border: 3px solid #d3f8b1;
  animation: ${prixClipFixAnimation} 2s linear infinite;
`;

const LoaderAfter = styled.div`
  content: "";
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  border-radius: 50%;
  border: 3px solid #d3f8b1;
  transform: rotate3d(90, 90, 0, 180deg);
  border-color: #8bda64;
  animation: ${prixClipFixAnimation} 2s linear infinite;
`;
