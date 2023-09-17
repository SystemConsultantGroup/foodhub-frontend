import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import AreaInputSido from "components/inputs/AreaInput/items/AreaInputSido";
import AreaInputSigungu from "components/inputs/AreaInput/items/AreaInputSigungu";
import AreaInputDong from "components/inputs/AreaInput/items/AreaInputDong";
import usePrevious from "hooks/usePrevious";

interface Props {
  label?: string;
  value?: number; // 기존에 선택된 지역 id
  onSelectValueChange?: (value: number) => void; // 지역 id 콜백 함수
  className?: string;
}

const AreaInput: React.FC<Props> = ({ label, value, onSelectValueChange, className }) => {
  const [sido, setSido] = useState<string>();
  const [sigungu, setSigungu] = useState<string>();
  const [dong, setDong] = useState<string>();

  const previousSido = usePrevious(sido);
  const previousSigungu = usePrevious(sigungu);
  const previousDong = usePrevious(dong);

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
    const areaId = `${sido ?? "NN"}${sigungu ?? "NNN"}${dong ?? "NNN"}`;

    onSelectValueChange?.(parseInt(areaId));
  }, [sido, sigungu, dong, onSelectValueChange]);

  useEffect(() => {
    if (value) {
      const area = value.toString();

      const nextSido = area.slice(0, 2);
      const nextSigungu = area.slice(2, 5);
      const nextDong = area.slice(5);
      // 무한 렌더링을 막기 위한 조치, 이전 값과 변경 예정인 값이 같을 경우 렌더링을 막는다.
      if (nextSido === previousSido && nextSigungu === previousSigungu && nextDong === previousDong)
        return;
      setSido(nextSido);
      setSigungu(nextSigungu);
      setDong(nextDong);
    }
  }, [value, sido, sigungu, dong, previousSido, previousSigungu, previousDong]);

  return (
    <EmotionWrapper className={className}>
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
