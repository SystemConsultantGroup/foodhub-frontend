import styled from "@emotion/styled";
import Button from "components/button/Button";
import Dropdown from "components/dropdown/Dropdown";
import TextInput from "components/inputs/TextInput/TextInput";
import { GENDER_DROPDOWN_VALUE_LIST } from "feature/mypage/constant/GenderDropdownValueList";

const { Option } = Dropdown;

interface Props {}

const ViewMyPageEdit = ({}: Props) => {
  return (
    <EmotionWrapper>
      <div className="input-container">
        <TextInput name="nickname" label="닉네임" placeholder="변경할 닉네임을 입력해주세요!" />
        <TextInput
          name="description"
          label="한줄 자기소개"
          placeholder="자기소개를 입력해주세요!"
        />
        <div>이 자리에 생년월일을 고르는 DatePicker 가 들어갈 예정입니다.</div>
        {/* TODO => placeholder 가 적용되지 않는 문제 핵결*/}
        <Dropdown label="성별" placeholder="성별을 선택해주세요!">
          {GENDER_DROPDOWN_VALUE_LIST.map(({ value, label }) => (
            <Option key={value} value={value}>
              <span>{label}</span>
            </Option>
          ))}
        </Dropdown>
      </div>
      <Button fullWidth className="button-save">
        저장하기
      </Button>
    </EmotionWrapper>
  );
};

export default ViewMyPageEdit;

const EmotionWrapper = styled.div`
  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 32px;
  }

  .button-save {
    margin-top: 32px;
  }
`;
