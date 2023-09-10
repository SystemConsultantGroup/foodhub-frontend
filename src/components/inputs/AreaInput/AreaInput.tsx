import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import AreaInputSido from "components/inputs/AreaInput/items/AreaInputSido";
import AreaInputSigungu from "components/inputs/AreaInput/items/AreaInputSigungu";
import AreaInputDong from "components/inputs/AreaInput/items/AreaInputDong";

interface Props {
  label?: string;
  value?: number; // 기존에 선택된 지역 id
  onSelectValueChange?: (value: number) => void; // 지역 id 콜백 함수
}

const AreaInput: React.FC<Props> = ({ label, value, onSelectValueChange }) => {
  const [sido, setSido] = useState<string>();
  const [sigungu, setSigungu] = useState<string>();
  const [dong, setDong] = useState<string>();

  const handleSidoChange = (value: string | undefined) => {
    setSido(value);
  };

  const handleSigunguChange = (value: string | undefined) => {
    setSigungu(value);
  };

  const handleDongChange = (value: string | undefined) => {
    setDong(value);
  };

  useEffect(() => {
    if (value && !sido && !sigungu && !dong) {
      // 초기값이 존재하고, sido가 선택되지 않은 경우
      const area = value.toString();
      setSido(area.slice(1, 3));
      setSigungu(area.slice(3, 6));
      setDong(area.slice(6));
    }

    if (onSelectValueChange && dong) {
      onSelectValueChange(parseInt(dong));
    }
  }, [value, sido, sigungu, dong, onSelectValueChange]);

  return (
    <EmotionWrapper>
      {label && <span className="label">{label}</span>}
      <div className="dropdowns">
        <AreaInputSido value={sido} onSelectSidoChange={handleSidoChange} />
        <AreaInputSigungu value={sigungu} sido={sido} onSelectSigunguChange={handleSigunguChange} />
        <AreaInputDong
          value={dong}
          sido={sido}
          sigungu={sigungu}
          onSelectDongChange={handleDongChange}
        />
      </div>
    </EmotionWrapper>
  );
};

export default AreaInput;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  span.label {
    font-size: 16px;
    font-weight: 300;
    margin-left: 2px;
    color: ${({ theme }) => theme.color.gray600};
  }

  div.dropdowns {
    display: flex;
    gap: 8px;
  }
`;
