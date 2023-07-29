import { css } from "@emotion/react";

// 각종 기본 버튼 스타일을 초기화합니다.
export const resetButtonStyle = css`
  button,
  input[type="submit"],
  input[type="reset"] {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    outline: inherit;
    background: none;
  }
`;
