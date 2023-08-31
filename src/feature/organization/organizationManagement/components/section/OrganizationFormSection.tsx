import styled from "@emotion/styled";
import router from "next/router";
import Button from "components/button/Button";
import TextInput from "components/inputs/TextInput/TextInput";
import ImageInput from "components/inputs/ImageInput/ImageInput";
import Dropdown from "components/dropdown/Dropdown";

interface Props {
  organizationId: string | number | string[];
}

const OrganizationFormSection: React.FC<Props> = ({ organizationId }) => {
  /**
   * TODO: organizationId에 해당하는 단체 메인 정보 받아오기
   */
  const organizationImageSrc = null; // 서버에서 받아온 단체 프로필 이미지
  const name = "시스템 컨설턴트 그룹"; // 서버에서 받아온 단체 이름
  const description = "성균관대학교 최고의 소프트웨어 개발 단체"; // 서버에서 받아온 단체 설명
  const area = "default"; // 서버에서 받아온 단체 활동 지역
  const typeValue = "student"; // 서버에서 받아온 단체 유형
  const imageSrc =
    organizationImageSrc ?? "/images/defaults/default-organization-profile-image.png";

  const checkNameLength = (value: string) => {
    return value.length <= 20;
  };

  const checkDescriptionLength = (value: string) => {
    return value.length <= 50;
  };

  const handleSubmit = () => {
    router.push(`/organizations/${organizationId}`);
  };

  return (
    <EmotionWrapper>
      <TextInput
        name="name"
        label="단체 이름"
        value={name}
        placeholder="단체 이름"
        conditionList={["20자 이하로 입력하세요."]}
        conditionCheckList={[
          { condition: checkNameLength, messageOnError: "입력 가능한 길이를 초과했습니다." },
        ]}
      />
      <TextInput
        name="description"
        label="단체 한줄 소개"
        multiline={true}
        value={description}
        placeholder="단체 한줄 소개"
        conditionList={["50자 이하로 입력하세요."]}
        conditionCheckList={[
          { condition: checkDescriptionLength, messageOnError: "입력 가능한 길이를 초과했습니다." },
        ]}
      />
      <Dropdown name="type" label="우리 단체의 유형은.." value={typeValue}>
        <Dropdown.Option value="student">학생 단체</Dropdown.Option>
        <Dropdown.Option value="corporation">회사</Dropdown.Option>
        <Dropdown.Option value="club">동호회</Dropdown.Option>
        <Dropdown.Option value="family">가족</Dropdown.Option>
        <Dropdown.Option value="etc">기타</Dropdown.Option>
      </Dropdown>
      <div className="area">
        <span className="areaLabel">주요 활동 지역</span>
        <div className="areaDropdowns">
          <Dropdown name="areaLevel1" value={area}>
            <Dropdown.Option value="default">시·도</Dropdown.Option>
          </Dropdown>
          <Dropdown name="areaLevel2" value={area}>
            <Dropdown.Option value="default">시·군·구</Dropdown.Option>
          </Dropdown>
          <Dropdown name="areaLevel3" value={area}>
            <Dropdown.Option value="default">읍·면·동</Dropdown.Option>
          </Dropdown>
        </div>
      </div>
      <ImageInput maxImageCount={1} existingImageUrlList={[imageSrc]}></ImageInput>
      <Button fullWidth={true} onClick={handleSubmit}>
        수정 완료
      </Button>
    </EmotionWrapper>
  );
};

export default OrganizationFormSection;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 30px;
  margin-bottom: 35px;

  div.area {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  span.areaLabel {
    width: 100%;
    font-weight: 300;
    margin-left: 2px;
    font-size: 16px;
    color: ${({ theme }) => theme.color.gray600};
  }

  div.areaDropdowns {
    display: flex;
    gap: 10px;
    width: 100%;
  }
`;
