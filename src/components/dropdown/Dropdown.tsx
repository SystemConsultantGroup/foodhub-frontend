import React, { useState, ReactNode } from "react";
import styled from "@emotion/styled";
import DropDownIcon from "components/dropdown/items/DropDownIcon";
import DropUpIcon from "components/dropdown/items/DropUpIcon";

interface Props {
  name: string;
  label?: string;
  children: ReactNode;
}

const Dropdown: React.FC<Props> = ({ children, label, name }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  return (
    <EmotionWrapper isOpen={isOpen}>
      {label && <span className="label">{label}</span>}
      <div onClick={toggleDropdown}></div>
      <select name={name} value={selectedValue} onChange={handleSelectChange}>
        {children}
      </select>
      {isOpen ? (
        <DropUpIcon style={{ position: "absolute" }} />
      ) : (
        <DropDownIcon style={{ position: "absolute" }} />
      )}
    </EmotionWrapper>
  );
};

export default Dropdown;

const EmotionWrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  display: inline-block;

  select {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  span.label {
    font-size: 16px;
    color: ${({ theme }) => theme.color.gray600};
  }

  option {
    border-radius: 6px;
    background-color: ${({ theme }) => theme.color.white};
  }
`;

/*
select {
    border-radius: 6px;
    border: 0.5px solid ${({ theme }) => theme.color.gray500};
    line-height: 1.5;
    color: ${({ theme }) => theme.color.gray400};
  }

*/
