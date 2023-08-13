import React, { useState } from "react";
import styled from "@emotion/styled";

interface Props {
  name: string;
  label?: string;
}

const Dropdown: React.FC<Props> = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  return (
    <EmotionWrapper>
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </EmotionWrapper>
  );
};

export default Dropdown;

const EmotionWrapper = styled.div`
  select {
    color: red;
  }
`;
