type TGender = "M" | "F" | "U";
type TFormValueItem = {
  value: string;
  isValid: boolean;
};

// TODO: API 응답 형식에 따라 달라질 수 있음
export type TUser = {
  nickname: string;
  introduction: string;
  birthYear: string;
  gender: TGender;
};

export type TMypageFormValues = {
  nickname: TFormValueItem;
  introduction: TFormValueItem;
  birthYear: TFormValueItem;
  gender: TFormValueItem;
};
