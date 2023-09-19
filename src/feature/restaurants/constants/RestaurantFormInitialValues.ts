import { TRestaurantFormValues } from "feature/restaurants/types/TRestaurantFormValues";

export const RESTAURANT_FORM_INITIAL_VALUES: TRestaurantFormValues = {
  userId: 0,
  name: {
    value: "",
    isValid: false,
  },
  categoryId: "1",
  tagIds: [0],
  address: {
    value: "",
    isValid: false,
  },
  link: {
    value: "",
    isValid: false,
  },
  delivery: false,
  comment: {
    value: "",
    isValid: false,
  },
  capacity: {
    value: "1",
    isValid: false,
  },
  openingHour: {
    value: "",
    isValid: false,
  },
  recommendedMenu: "[]",
  orderTip: {
    value: "",
    isValid: false,
  },

  // 이미지는 따로 처리
};
