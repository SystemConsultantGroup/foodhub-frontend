import React, { HTMLAttributes, useState } from "react";
import styled from "@emotion/styled";
import DropDownOption, { Props as OptionProps } from "components/dropDown/items/DropDownOption";
import DropDownIcon from "components/dropDown/items/DropDownIcon";
import DropUpIcon from "components/dropDown/items/DropUpIcon";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string;
  label?: string;
  children: React.ReactNode;
  onSelectValueChange?: (value: string) => void;
}

const DropDown = ({ children, label, name, onSelectValueChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState<React.ReactNode>();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string, text: React.ReactNode, index: number) => {
    setSelectedText(text);
    setIsOpen(false);

    if (onSelectValueChange) {
      onSelectValueChange(value);
    }
  };

  return (
    <EmotionWrapper isOpen={isOpen}>
      {label && <span className="label">{label}</span>}
      <div className="selected-option" onClick={toggleDropdown}>
        <span>{selectedText || "Select an option"}</span>
        {isOpen ? <DropUpIcon /> : <DropDownIcon />}
      </div>
      <div className="options">
        {React.Children.map(
          children,
          (child, index) =>
            React.isValidElement<OptionProps>(child) &&
            React.cloneElement(child, {
              onClick: () => handleOptionClick(child.props.value, child.props.children, index),
            })
        )}
      </div>
    </EmotionWrapper>
  );
};

DropDown.Option = DropDownOption;
export default DropDown;

const EmotionWrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  font-size: 14px;
  width: 100%;

  div.selected-option {
    display: flex;
    gap: 8px;
    width: 100%;
    height: 100%;
    align-items: center;
    font-weight: 300;

    padding: 8px;
    border-radius: 6px;
    border: 0.5px solid ${({ theme }) => theme.color.gray500};
    color: ${({ theme }) => theme.color.gray400};
    cursor: pointer;

    span {
      width: 100%;
    }
  }

  div.options {
    position: absolute;
    top: 120%;
    left: 0;
    width: 100%;
    overflow-y: auto;
    border: 0.5px solid ${({ theme }) => theme.color.gray500};
    border-radius: 6px;
    background-color: white;
    box-shadow: ${({ theme }) => theme.shadow.default};
    display: ${(props) => (props.isOpen ? "block" : "none")};
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
