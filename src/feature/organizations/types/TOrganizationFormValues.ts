import { TOrganizationType } from "feature/organizations/types/TOrganizationType";

export type TOrganizationFormValues = {
  name: string; // 단체명
  type: TOrganizationType; // 단체 종류 (학생 단체, 회사, 가족, 기타)
  areaId: number; // 단체 활동 지역
  isPublic: boolean; // 직접 가입 가능 여부 (비밀번호 없이)
  password?: string; // 직접 가입 시 필요한 비밀번호
  nickname: string; // 단체 소유자의 단체 내의 닉네임
};
