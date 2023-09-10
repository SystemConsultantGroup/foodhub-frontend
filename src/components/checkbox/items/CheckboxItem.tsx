import styled from "@emotion/styled";
import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
  checked?: boolean;
  setChecked?: (checked: boolean | string) => void;
  value: string;
}

const CheckboxItem = ({ children, checked, setChecked, value }: Props) => {
  const handleClickCheckbox = () => {
    setChecked?.(!checked);
  };

  return (
    <EmotionWrapper data-checked={checked} onClick={handleClickCheckbox}>
      <div data-role="checkbox" data-checked={checked} />
      <label data-checked={checked}>{children}</label>
      <input hidden type="checkbox" checked={checked} value={value} />
    </EmotionWrapper>
  );
};

export default CheckboxItem;

const EmotionWrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.color.gray200};
  border-radius: 4px;
  margin: 4px 0;
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray400};

  &[data-checked="true"] {
    border: 1px solid ${({ theme }) => theme.color.primary500};
    color: ${({ theme }) => theme.color.primary600};
    font-weight: 500;
  }

  div {
    width: 20px;
    height: 20px;
    border: 1px solid ${({ theme }) => theme.color.gray200};
    border-radius: 4px;
    margin-right: 4px;
    cursor: pointer;

    &[data-checked="true"] {
      background: ${({ theme }) => theme.color.primary500};
      border: 1px solid ${({ theme }) => theme.color.primary600};

      &::after {
        content: "";
        display: block;
        width: 6px;
        height: 10px;
        border: solid #fff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        position: relative;
        top: 2px;
        left: 5px;

        &:hover {
          border: solid #fff;
          border-width: 0 2px 2px 0;

          transform: rotate(45deg);
          position: relative;
          top: 2px;
          left: 5px;
        }
      }
    }
  }
  label {
    padding: 10px 10px;
    white-space: wrap;
    word-break: break-all;

    /* &:hover {
      border: 1px solid ${({ theme }) => theme.color.primary500};
      color: ${({ theme }) => theme.color.primary500};
      font-weight: 500;
    }

    &[data-disabled="true"] {
      border: 1px solid ${({ theme }) => theme.color.gray200};
      color: ${({ theme }) => theme.color.gray200};
      background-color: ${({ theme }) => theme.color.gray100};
      cursor: not-allowed;
    }

    &[data-checked="true"] {
      color: #fff;
      background: ${({ theme }) => theme.color.primary500};
      border: 1px solid ${({ theme }) => theme.color.primary600};
      font-weight: 500;
    } */
  }
`;
