import { TRestaurantFormValues } from "feature/restaurants/types/TRestaurantFormValues";

export const RESTAURANT_FORM_INITIAL_VALUES: TRestaurantFormValues = {
  userId: 0,
  name: {
    value: "",
    isValid: false,
  },
  categoryId: 0,
  tagIds: [0],
  address: "",
  link: "",
  delivery: false,
  comment: "",
  capacity: 0,
  openingHour: "",
  recommendedMenu: "",
  orderTip: "",
  // 이미지는 따로 처리
};
