import React, { HTMLAttributes, useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import DropDownOption, { Props as OptionProps } from "components/dropDown/items/DropDownOption";
import DropDownIcon from "components/dropDown/items/DropDownIcon";
import DropDownUpIcon from "components/dropDown/items/DropDownUpIcon";
import { TSelectedOption } from "components/dropDown/types/TSelectedOption";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  label?: string;
  children: React.ReactNode;
  onSelectValueChange?: (value: string) => void;
}

const DropDown = ({ children, label, onSelectValueChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TSelectedOption | null>(null);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string, text: React.ReactNode, index: number) => {
    const newSelectedOption: TSelectedOption = {
      index: index,
      text: text,
      value: value,
    };
    setSelectedOption(newSelectedOption);
    setIsOpen(false);

    if (onSelectValueChange) {
      onSelectValueChange(value);
    }
  };

  const selectedText = selectedOption ? selectedOption.text : null;
  const selectedOptionIndex = selectedOption ? selectedOption.index : null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // 자식 옵션 중에서 isSelected 값이 true인 옵션을 찾아서 selectedOption 초기화
    React.Children.forEach(children, (child, index) => {
      if (React.isValidElement<OptionProps>(child) && child.props.isSelected) {
        const newSelectedOption: TSelectedOption = {
          index: index,
          text: child.props.children,
          value: child.props.value,
        };
        setSelectedOption(newSelectedOption);
        return;
      }
    });

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <EmotionWrapper isOpen={isOpen} isCompleted={selectedOption ? true : false}>
      {label && <span className="label">{label}</span>}
      <div className="selected-option" onClick={toggleDropdown}>
        <span>{selectedText || "Select an option"}</span>
        {isOpen ? <DropDownUpIcon /> : <DropDownIcon />}
      </div>
      <div className="options" ref={dropDownRef}>
        {React.Children.map(
          children,
          (child, index) =>
            React.isValidElement<OptionProps>(child) &&
            React.cloneElement(child, {
              isSelected: selectedOptionIndex === index,
              onClick: () => handleOptionClick(child.props.value, child.props.children, index),
            })
        )}
      </div>
    </EmotionWrapper>
  );
};

DropDown.Option = DropDownOption;
export default DropDown;

const EmotionWrapper = styled.div<{ isOpen: boolean; isCompleted: boolean }>`
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
    color: ${({ theme }) => theme.color.gray600};
  }
`;
