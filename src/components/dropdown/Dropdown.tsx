import React, { HTMLAttributes, useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import DropdownOption, { Props as OptionProps } from "components/dropdown/items/DropdownOption";
import DropdownDownIcon from "components/dropdown/items/DropdownDownIcon";
import DropdownUpIcon from "components/dropdown/items/DropdownUpIcon";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  label?: string;
  value?: string;
  placeHolder?: string;
  children: React.ReactNode;
  onSelectValueChange?: (value: string) => void;
  selectContainerMaxHeight?: number;
  disabled?: boolean;
}

const Dropdown = ({
  children,
  label,
  value,
  onSelectValueChange,
  selectContainerMaxHeight,
  name,
  placeHolder = "Select an option",
  disabled = false,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptionValue, setSelectedOptionValue] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (value: string, children: React.ReactNode) => {
    if (!disabled) {
      setSelectedOptionValue(value);
      setIsOpen(false);

      if (onSelectValueChange) {
        onSelectValueChange(value);
      }
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // value 초기값에 해당하는 옵션 또는 isSelected 값이 true인 옵션을 찾아서 selectedOption 초기화
    if (selectedOptionValue === null) {
      React.Children.forEach(children, (child) => {
        if (React.isValidElement<OptionProps>(child)) {
          const isDefault = value ? child.props.value === value : child.props.isSelected;
          if (isDefault) {
            setSelectedOptionValue(child.props.value);
            if (onSelectValueChange) {
              onSelectValueChange(child.props.value);
            }
            return;
          }
        }
      });
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [children, selectedOptionValue, onSelectValueChange, value]);

  return (
    <EmotionWrapper
      isOpen={isOpen}
      isCompleted={!!selectedOptionValue}
      selectContainerMaxHeight={selectContainerMaxHeight}
    >
      {label && <span className="label">{label}</span>}
      <div className="selected-option" onClick={toggleDropdown}>
        {selectedOptionValue ? (
          // 특정 option이 선택된 경우
          <span>
            {React.Children.map(children, (child) => {
              if (
                React.isValidElement<OptionProps>(child) &&
                child.props.value === selectedOptionValue
              ) {
                return child.props.children;
              }
              return null;
            })}
          </span>
        ) : (
          // 선택되지 않은 경우
          <span>{placeHolder}</span>
        )}
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

const EmotionWrapper = styled.div<{
  isOpen: boolean;
  isCompleted: boolean;
  selectContainerMaxHeight?: number;
}>`
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
    z-index: 100;
    top: 120%;
    left: 0;
    width: 100%;
    overflow-y: ${({ selectContainerMaxHeight }) => (selectContainerMaxHeight ? "scroll" : "auto")};
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

    ${({ selectContainerMaxHeight }) =>
      selectContainerMaxHeight && `max-height: ${selectContainerMaxHeight}px`};
    z-index: 10;
    max-height: 15vh;
    overflow: auto;
  }

  span.label {
    font-size: 16px;
    font-weight: 300;
    margin-left: 2px;
    color: ${({ theme }) => theme.color.gray600};
  }
`;
