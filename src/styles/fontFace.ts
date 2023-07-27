import { css } from "@emotion/react";

export const fontFace = css`
  /* pretendard 1.3.8 이용 */

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    src:
      local("Pretendard Regular"),
      local("Pretendard-Regular"),
      url("../fonts/pretendard/Pretendard-Regular.woff2") format("woff2"),
      url("../fonts/pretendard/Pretendard-Regular.woff") format("woff"),
      url("../fonts/pretendard/Pretendard-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    src:
      local("Pretendard Bold"),
      local("Pretendard-Bold"),
      url("../fonts/pretendard/Pretendard-Bold.woff2") format("woff2"),
      url("../fonts/pretendard/Pretendard-Bold.woff") format("woff"),
      url("../fonts/pretendard/Pretendard-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 900;
    src:
      local("Pretendard Black"),
      local("Pretendard-Black"),
      url("../fonts/pretendard/Pretendard-Black.woff2") format("woff2"),
      url("../fonts/pretendard/Pretendard-Black.woff") format("woff"),
      url("../fonts/pretendard/Pretendard-Black.ttf") format("truetype");
  }
`;
