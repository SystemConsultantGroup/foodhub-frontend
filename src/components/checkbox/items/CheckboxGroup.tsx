import styled from "@emotion/styled";
import { Children, HTMLAttributes, ReactNode, cloneElement, isValidElement } from "react";

export interface Props extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  checkedList: string[];
  setCheckedItem: (checkedList: string) => void;
}

export interface CheckboxItemProps {
  checked: boolean;
  value: string;
  label: string;
  children: ReactNode;
  setChecked: (value: string) => void;
}

const CheckboxGroup = ({ children, checkedList, setCheckedItem, ...props }: Props) => {
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement<CheckboxItemProps>(child)) {
      const checked = checkedList.includes(child.props.value);
      const value = child.props.value;

      const setChecked = () => setCheckedItem(value);

      return cloneElement(child, { checked, setChecked, value });
    }
    return child;
  });

  return <EmotionWrapper {...props}>{childrenWithProps}</EmotionWrapper>;
};

export default CheckboxGroup;

const EmotionWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;
