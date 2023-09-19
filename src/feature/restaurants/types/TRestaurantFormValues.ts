import { TFormValue } from "feature/restaurants/types/TFormValue";

export type TRestaurantFormValues = {
  userId: number; // 맛집 생성자의 id
  name: TFormValue<string>; // 맛집 이름
  categoryId: number; // 맛집 카테고리 id
  tagIds: number[]; // 맛집 태그 id 배열
  address?: TFormValue<string>; // 맛집 주소
  link?: TFormValue<string>; // 맛집 링크
  delivery?: boolean; // 맛집 배달 여부
  comment?: TFormValue<string>; // 맛집 한줄평
  capacity?: TFormValue<string>; // 맛집 수용인원
  openingHour?: TFormValue<string>; // 맛집 운영 시간
  recommendedMenu?: string; // 맛집 추천 메뉴
  orderTip?: TFormValue<string>; // 맛집 주문 팁
  // 맛집 이미지 파일들의 uuid 배열
  files?: {
    uuid: string;
  }[];
};
