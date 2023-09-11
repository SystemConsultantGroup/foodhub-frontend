import { css } from "@emotion/react";

// 긴 텍스트를 ...으로 줄여주는 css
export const textEllipsis = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`;
