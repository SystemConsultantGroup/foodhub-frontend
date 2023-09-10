import { useState, useEffect } from "react";
import Dropdown from "components/dropdown/Dropdown";
import { hangjungdong } from "constant/area";

interface Props {
  value?: string; // 기존에 선택된 value id (hangjungdong에 있는 id가 string이어서 일단 string으로)
  sido?: string;
  onSelectSigunguChange?: (value: string | undefined) => void;
}

const AreaInputSigungu: React.FC<Props> = ({ value, sido, onSelectSigunguChange }) => {
  const [sigungu, setSigungu] = useState<string | undefined>();

  const handleSigunguChange = (value: string) => {
    setSigungu(value);
  };

  useEffect(() => {
    if (onSelectSigunguChange) {
      return onSelectSigunguChange(sigungu);
    }
  }, [onSelectSigunguChange, sigungu]);

  useEffect(() => {
    setSigungu(undefined);
  }, [sido]);

  return (
    <Dropdown
      key={sido}
      name="시군구"
      placeHolder="시·군·구"
      value={value}
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
  );
};

export default AreaInputSigungu;
