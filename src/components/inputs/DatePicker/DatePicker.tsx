import React from "react";
import styled from "@emotion/styled";

// props : 최소 날짜, 최대 날짜, label

interface Props {
  minDate: string;
  maxDate: string;
  label?: string;
}

const DatePicker: React.FC<Props> = ({ minDate, maxDate, label }) => {
  return <EmotionWrapper></EmotionWrapper>;
};

export default DatePicker;

const EmotionWrapper = styled.div``;
