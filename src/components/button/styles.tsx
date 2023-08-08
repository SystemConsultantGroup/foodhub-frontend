import { css, Theme } from "@emotion/react";
import { Props } from "components/button/Button";

const primaryStyle = (theme: Theme) => {
  return css`
    background-color: ${theme.color.primary600};
    color: ${theme.color.white};
    border: none;
    box-shadow: none;

    &:hover {
      background-color: ${theme.color.primary500};
      box-shadow: none;
    }
    &:focus {
      outline: none;
      background-color: ${theme.color.primary600};
      box-shadow: 0 0 0 2px ${theme.color.primary300};
    }
    &.active {
      background-color: ${theme.color.primary700};
      box-shadow: none;
    }
  `;
};

export const getButtonStyles = (theme: Theme, variant: Props["variant"]) => {
  switch (variant) {
    case "secondary":
      return css`
        background-color: ${theme.color.white};
        border: 1px solid ${theme.color.gray400};
        box-shadow: none;
        color: ${theme.color.gray900};

        &:hover {
          border: 1px solid ${theme.color.primary700};
          box-shadow: none;
          color: ${theme.color.primary700};
        }
        &:focus {
          border: none;
          box-shadow: 0 0 0 2px ${theme.color.primary300};
          color: ${theme.color.gray900};
        }
        &.active {
          border: 1px solid ${theme.color.primary600};
          box-shadow: none;
          color: ${theme.color.primary500};
        }
      `;
    case "text":
      return css`
        background-color: ${theme.color.white};
        border: none;
        box-shadow: none;
        color: ${theme.color.gray900};

        &:hover {
          background-color: ${theme.color.primary100};
          color: ${theme.color.primary700};
        }
        &:focus {
          background-color: ${theme.color.primary100};
          box-shadow: 0 0 0 2px ${theme.color.primary300};
          color: ${theme.color.gray900};
        }
        &.active {
          background-color: ${theme.color.primary100};
          color: ${theme.color.primary500};
        }
        &:disabled {
          background-color: ${theme.color.white};
          box-shadow: none;
          color: ${theme.color.gray200};
        }
      `;
    default:
      return primaryStyle(theme);
  }
};

export const getWidthStyles = (theme: Theme, fullWidth: Props["fullWidth"]) => {
  if (fullWidth) {
    return css`
      width: 100%;
    `;
  } else {
    return css`
      width: auto;
      display: inline-flex;
    `;
  }
};

export const setLoadingStyles = (loading: Props["loading"]) => {
  if (loading) {
    return css`
      padding: 4px 8px;
      gap: 8px;
    `;
  }
  return css``;
};
