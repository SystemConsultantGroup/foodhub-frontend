import styled from "@emotion/styled"
import { RadioInputProps } from "./RadioInputItem";
import { theme } from "styles/theme";

export const StyledRadioInputLabel = styled.label<RadioInputProps>`
    width: 100%;
    height: 20px;
    padding: 0px 18px;
    border-radius: 6px;
    background: ${theme.color.white};
    border: 0.5px solid ${theme.color.primary700};
    color: ${theme.color.primary700};

    &:hover {
        cursor: pointer;
        border: 0.5px solid ${theme.color.primary500};
        color: ${theme.color.primary500};
    }

    ${({ disabled }) => disabled && `
        border: 0.5px solid ${theme.color.gray400};
    `}

    ${({ checked }) => checked && `
        border: 1px solid ${theme.color.primary600};
        background: ${theme.color.primary500};
        color: ${theme.color.white};
    `}
`;