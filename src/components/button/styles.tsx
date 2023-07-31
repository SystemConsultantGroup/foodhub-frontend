import { css, Theme } from "@emotion/react";
import { Props } from "components/button/Button";

const primaryStyle = (theme: Theme) => {
  return css`
    background-color: ${theme.color.primary600};
    span {
      color: ${theme.color.white};
    }
    border: none;
    box-shadow: none;

    &:active {
      background-color: ${theme.color.primary700};
    }
    &:hover {
      background-color: ${theme.color.primary500};
    }
    &:focus {
      background-color: ${theme.color.primary600};
      box-shadow: 0 0 0 2px ${theme.color.primary300};
      &:not(:active) {
        outline: none;
      }
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
        span {
          color: ${theme.color.gray900};
        }

        &:active {
          border: 1px solid ${theme.color.primary600};
          box-shadow: none;
          span {
            color: ${theme.color.primary500};
          }
        }
        &:hover {
          border: 1px solid ${theme.color.primary700};
          box-shadow: none;
          span {
            color: ${theme.color.primary700};
          }
        }
        &:focus {
          border: none;
          box-shadow: 0 0 0 2px ${theme.color.primary300};
          span {
            color: ${theme.color.gray900};
          }
          &:not(:active) {
            outline: none;
          }
        }
      `;
    case "text":
      return css`
        background-color: ${theme.color.white};
        border: none;
        box-shadow: none;
        span {
          color: ${theme.color.gray900};
        }

        &:active {
          background-color: ${theme.color.primary100};
          span {
            color: ${theme.color.primary500};
          }
        }
        &:hover {
          background-color: ${theme.color.primary100};
          span {
            color: ${theme.color.primary700};
          }
        }
        &:focus {
          background-color: ${theme.color.primary100};
          box-shadow: 0 0 0 2px ${theme.color.primary300};
          span {
            color: ${theme.color.gray900};
          }
        }
        &:disabled {
          background-color: ${theme.color.white};
          span {
            color: ${theme.color.gray200};
          }
        }
      `;
    case "icon":
      return css`
        padding: 4px 4px;
        ${primaryStyle(theme)}
      `;
    case "iconWithText":
      return css`
        padding: 4px 8px;
        gap: 8px;
        ${primaryStyle(theme)}
      `;
    default:
      return primaryStyle(theme);
  }
};

export const getWidthStyles = (theme: Theme, widthType: Props["widthType"]) => {
  switch (widthType) {
    case "default":
      return css`
        width: auto;
        display: inline-flex;
      `;
    case "fullWidth":
      return css`
        width: 100%;
      `;
    default:
      return css`
        width: ${widthType}px;
        display: flex;
        justify-content: center;
        align-items: center;
      `;
  }
};
