import { useState, useEffect } from "react";
import Dropdown from "components/dropdown/Dropdown";
import { hangjungdong } from "constant/area";

interface Props {
  value?: string; // 기존에 선택된 value id (hangjungdong에 있는 id가 string이어서 일단 string으로)
  sido?: string;
  sigungu?: string;
  onSelectDongChange?: (value: string | undefined) => void;
}

const AreaInputDong: React.FC<Props> = ({ value, sido, sigungu, onSelectDongChange }) => {
  const [dong, setDong] = useState<string | undefined>();

  const handleDongChange = (value: string) => {
    setDong(value);
  };

  useEffect(() => {
    if (onSelectDongChange) {
      return onSelectDongChange(dong);
    }
  }, [onSelectDongChange, dong]);

  return (
    <Dropdown
      name="읍면동"
      placeHolder="읍·면·동"
      value={value}
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
  );
};

export default AreaInputDong;
