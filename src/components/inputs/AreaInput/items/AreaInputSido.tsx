import { useState, useEffect } from "react";
import Dropdown from "components/dropdown/Dropdown";
import { hangjungdong } from "constant/area";

interface Props {
  value?: string; // 기존에 선택된 value id (hangjungdong에 있는 id가 string이어서 일단 string으로)
  onSelectSidoChange?: (value: string | undefined) => void;
}

const AreaInputSido: React.FC<Props> = ({ value, onSelectSidoChange }) => {
  const [sido, setSido] = useState<string | undefined>();

  const handleSidoChange = (value: string) => {
    setSido(value);
  };

  useEffect(() => {
    if (onSelectSidoChange) {
      return onSelectSidoChange(sido);
    }
  }, [onSelectSidoChange, sido]);

  return (
    <Dropdown name="시도" placeHolder="시·도" value={value} onSelectValueChange={handleSidoChange}>
      {hangjungdong.sido.map((data) => (
        <Dropdown.Option key={data.sido} value={data.sido}>
          {data.codeNm}
        </Dropdown.Option>
      ))}
    </Dropdown>
  );
};

export default AreaInputSido;
