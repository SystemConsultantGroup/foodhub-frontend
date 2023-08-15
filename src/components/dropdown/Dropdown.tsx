import React, { HTMLAttributes, useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import DropdownOption, { Props as OptionProps } from "components/dropdown/items/DropdownOption";
import DropdownDownIcon from "components/dropdown/items/DropdownDownIcon";
import DropdownUpIcon from "components/dropdown/items/DropdownUpIcon";
import { TSelectedOption } from "components/dropdown/types/TSelectedOption";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  label?: string;
  children: React.ReactNode;
  onSelectValueChange?: (value: string) => void;
}

const Dropdown = ({ children, label, onSelectValueChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TSelectedOption | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string, children: React.ReactNode) => {
    const newSelectedOption: TSelectedOption = {
      children,
      value,
    };
    setSelectedOption(newSelectedOption);
    setIsOpen(false);

    if (onSelectValueChange) {
      onSelectValueChange(value);
    }
  };

  const selectedOptionChildren = selectedOption ? selectedOption.children : null;
  const selectedOptionValue = selectedOption ? selectedOption.value : null;

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // 자식 옵션 중에서 isSelected 값이 true인 옵션을 찾아서 selectedOption 초기화
    if (selectedOption == null) {
      React.Children.forEach(children, (child) => {
        if (React.isValidElement<OptionProps>(child) && child.props.isSelected) {
          const newSelectedOption: TSelectedOption = {
            children: child.props.children,
            value: child.props.value,
          };
          setSelectedOption(newSelectedOption);
          return;
        }
      });
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [children, selectedOption]);

  return (
    <EmotionWrapper isOpen={isOpen} isCompleted={selectedOption ? true : false}>
      {label && <span className="label">{label}</span>}
      <div className="selected-option" onClick={toggleDropdown}>
        <span>{selectedOptionChildren || "Select an option"}</span>
        {isOpen ? <DropdownUpIcon /> : <DropdownDownIcon />}
      </div>
      <div className="options" ref={dropdownRef}>
        {React.Children.map(
          children,
          (child) =>
            React.isValidElement<OptionProps>(child) &&
            React.cloneElement(child, {
              isSelected: selectedOptionValue === child.props.value,
              onClick: () => handleOptionClick(child.props.value, child.props.children),
            })
        )}
      </div>
    </EmotionWrapper>
  );
};

Dropdown.Option = DropdownOption;
export default Dropdown;

const EmotionWrapper = styled.div<{ isOpen: boolean; isCompleted: boolean }>`
  position: relative;
  font-size: 14px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

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
    border: ${({ isOpen, isCompleted }) => (isOpen || isCompleted ? "1px" : "0.5px")} solid
      ${({ theme, isOpen, isCompleted }) =>
        isOpen
          ? theme.color.primary500
          : isCompleted
          ? theme.color.primary700
          : theme.color.gray500};
    color: ${({ theme, isCompleted }) => (isCompleted ? theme.color.gray600 : theme.color.gray400)};
    cursor: pointer;
    box-shadow: ${({ theme, isOpen }) => (isOpen ? theme.shadow.default : "none")};

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
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    height: ${(props) => (props.isOpen ? "auto" : "0")};
    transition:
      opacity 0.3s ease-in-out,
      height 0.3s ease-in-out;
  }

  span.label {
    font-size: 16px;
    font-weight: 300;
    margin-left: 2px;
    color: ${({ theme }) => theme.color.gray600};
  }
`;
