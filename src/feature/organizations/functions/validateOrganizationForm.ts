import { NICKNAME_MAX_LENGTH, ORGANIZATION_NAME_MAX_LENGTH } from "constant/limit";

// 단체명 유효성 검사 조건을 정의합니다.
export const validateOrganizationNameLength = {
  condition: (value: string): boolean => {
    if (value?.length > ORGANIZATION_NAME_MAX_LENGTH) return false;
    return true;
  },
  messageOnError: `단체명은 ${ORGANIZATION_NAME_MAX_LENGTH}자 이내로 입력해주세요.`,
};

export const validateOrganizationNameEmpty = {
  condition: (value: string): boolean => {
    if (!value) return false;
    if (value?.length === 0) return false;
    return true;
  },
  messageOnError: "단체명을 입력해주세요.",
};

// 단체 내 닉네임 유효성 검사 조건을 정의합니다.
export const validateOrganizationNicknameLength = {
  condition: (value: string): boolean => {
    if (value?.length > NICKNAME_MAX_LENGTH) return false;
    return true;
  },
  messageOnError: `단체 내 닉네임은 ${NICKNAME_MAX_LENGTH}자 이내로 입력해주세요.`,
};

export const validateOrganizationNicknameEmpty = {
  condition: (value: string): boolean => {
    if (!value) return false;
    if (value?.length === 0) return false;
    return true;
  },
  messageOnError: "단체 내 닉네임을 입력해주세요.",
};

// 단체 비밀번호 유효성 검사 조건을 정의합니다.
export const validateOrganizationPasswordLength = {
  condition: (value: string): boolean => {
    if (value?.length < 4 || value?.length > 15) return false;
    return true;
  },

  messageOnError: "비밀번호는 4자 이상 15자 이하로 입력해주세요.",
};

export const validateOrganizationPasswordEmpty = {
  condition: (value: string): boolean => {
    if (!value) return false;
    if (value?.length === 0) return false;
    return true;
  },
  messageOnError: "비밀번호를 입력해주세요.",
};
