import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import Dropdown from "components/dropdown/Dropdown";
import { hangjungdong } from "constant/area";

interface Props {
  label?: string;
  value?: number; // 기존에 선택된 지역 id
  onSelectValueChange?: (value: number) => void; // 지역 id 콜백 함수
}

const AreaInput: React.FC<Props> = ({ label, value, onSelectValueChange }) => {
  const [sido, setSido] = useState<string>();
  const [sigungu, setSigungu] = useState<string>();
  const [dong, setDong] = useState<string>();

  const handleSidoChange = (value: string) => {
    setSido(value);
    setSigungu(undefined);
    setDong(undefined);
  };

  const handleSigunguChange = (value: string) => {
    setSigungu(value);
    setDong(undefined);
  };

  const handleDongChange = (value: string) => {
    setDong(value);
  };

  useEffect(() => {
    const unParsing = () => {
      const sidoNum = sido ?? "00";
      const sigunguNum = sigungu ?? "000";
      const dongNum = dong ?? "000";
      return Number("1" + sidoNum + sigunguNum + dongNum);
    };

    if (value && !sido && !sigungu && !dong) {
      // 초기값이 존재하고, sido가 선택되지 않은 경우
      const area = value.toString();
      setSido(area.slice(1, 3));
      setSigungu(area.slice(3, 6));
      setDong(area.slice(6));
    }

    if (onSelectValueChange) {
      onSelectValueChange(unParsing());
    }
  }, [value, sido, sigungu, dong, onSelectValueChange]);

  return (
    <EmotionWrapper>
      {label && <span className="label">{label}</span>}
      <div className="dropdowns">
        <Dropdown
          name="시도"
          placeHolder="시·도"
          value={sido}
          onSelectValueChange={handleSidoChange}
        >
          {hangjungdong.sido.map((data) => (
            <Dropdown.Option key={data.sido} value={data.sido}>
              {data.codeNm}
            </Dropdown.Option>
          ))}
        </Dropdown>
        <Dropdown
          name="시군구"
          placeHolder="시·군·구"
          value={sigungu}
          onSelectValueChange={handleSigunguChange}
          disabled={!sido}
        >
          {hangjungdong.sigungu
            .filter((item) => item.sido === sido)
            .map((data) => (
              <Dropdown.Option key={data.sigungu} value={data.sigungu}>
                {data.codeNm}
              </Dropdown.Option>
            ))}
        </Dropdown>
        <Dropdown
          name="읍면동"
          placeHolder="읍·면·동"
          value={dong}
          onSelectValueChange={handleDongChange}
          disabled={!sigungu}
        >
          {hangjungdong.dong
            .filter((item) => item.sido === sido && item.sigungu === sigungu)
            .map((data) => (
              <Dropdown.Option key={data.dong} value={data.dong}>
                {data.codeNm}
              </Dropdown.Option>
            ))}
        </Dropdown>
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
