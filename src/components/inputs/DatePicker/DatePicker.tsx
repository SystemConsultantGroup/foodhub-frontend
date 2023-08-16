import React, { useState } from "react";
import styled from "@emotion/styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { ko } from "date-fns/esm/locale"; // 한국어 설정

// props : 최소 날짜, 최대 날짜, label

interface Props {
  minDate: string;
  maxDate: string;
  value?: string; // 날짜 초기값
  label?: string;
}

const DateBox: React.FC<Props> = ({ minDate, maxDate, label }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <EmotionWrapper>
      {label && <span className="label">{label}</span>}
      <DatePicker
        dateFormat="yyyy-MM-dd" // 날짜 형태
        shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
        minDate={new Date("2000-01-01")} // minDate 이전 날짜 선택 불가
        maxDate={new Date()} // maxDate 이후 날짜 선택 불가
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="datePicker"
      />
    </EmotionWrapper>
  );
};

export default DateBox;

const EmotionWrapper = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 12px;
  font-weight: 300;
  margin-left: 2px;

  span.label {
    font-size: 16px;
    color: ${({ theme }) => theme.color.gray600};
  }

  .datePicker {
  }
`;
