import styled from "@emotion/styled";
import RadioGroup from "components/radio/items/RadioGroup";
import { ReactNode, useState } from "react";

interface Props {
  name: string;
  value: string;
  children: ReactNode;
  disabled?: boolean;
}

const Radio = ({ name, value, children, disabled = false }: Props) => {
  const [checked, setChecked] = useState(false);

  const onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <EmotionWrapper>
      <label data-checked={checked} data-disabled={disabled}>
        <input
          hidden
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChangeRadio}
        />
        {children}
      </label>
    </EmotionWrapper>
  );
};

Radio.Group = RadioGroup;

export default Radio;

const EmotionWrapper = styled.div`
  label {
    width: 80px;
    padding: 3px 15px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid ${({ theme }) => theme.color.primary700};
    border-radius: 6px;
    background: #fff;

    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.primary700};

    white-space: wrap;
    word-break: break-all;

    &:hover {
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
    }
  }
`;
