import React, { HTMLAttributes, useState } from "react";
import styled from "@emotion/styled";
import { Props as OptionProps } from "components/dropDown/items/DropDownOption";
import DropDownIcon from "components/dropDown/items/DropDownIcon";
import DropUpIcon from "components/dropDown/items/DropUpIcon";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string;
  label?: string;
  children: React.ReactNode;
}

const DropDown = ({ children, label, name }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <EmotionWrapper isOpen={isOpen}>
      {label && <span className="label">{label}</span>}
      <div className="selected-option" onClick={toggleDropdown}>
        {selectedValue || "Select an option"}
        {isOpen ? (
          <DropUpIcon style={{ position: "absolute" }} />
        ) : (
          <DropDownIcon style={{ position: "absolute" }} />
        )}
      </div>
      <div className="options">
        {React.Children.map(
          children,
          (child) =>
            React.isValidElement<OptionProps>(child) &&
            React.cloneElement(child, {
              onClick: () => handleOptionClick(child.props.value),
            })
        )}
      </div>
    </EmotionWrapper>
  );
};

export default DropDown;

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
