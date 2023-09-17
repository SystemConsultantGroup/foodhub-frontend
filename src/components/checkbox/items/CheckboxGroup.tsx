import styled from "@emotion/styled";
import { Children, ReactNode, cloneElement, isValidElement } from "react";

export interface Props {
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

const CheckboxGroup = ({ children, checkedList, setCheckedItem }: Props) => {
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement<CheckboxItemProps>(child)) {
      const checked = checkedList.includes(child.props.value);
      const value = child.props.value;

      const setChecked = () => setCheckedItem(value);

      return cloneElement(child, { checked, setChecked, value });
    }
    return child;
  });

  return <EmotionWrapper>{childrenWithProps}</EmotionWrapper>;
};

export default CheckboxGroup;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
