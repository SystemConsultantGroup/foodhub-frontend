import { css } from "@emotion/react";
import { theme } from "styles/theme";

export const interactiveShadow = css`
  &:hover {
    box-shadow: ${theme.shadow.hover};
  }

  &:active {
    box-shadow: ${theme.shadow.active};
  }
  transition: box-shadow 0.2s ease-in-out;
  box-shadow: ${theme.shadow.default};
`;
