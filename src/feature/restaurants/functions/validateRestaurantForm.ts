import {
  RESTAURANT_ADDRESS_MAX_LENGTH,
  RESTAURANT_COMMENT_MAX_LENGTH,
  RESTAURANT_NAME_MAX_LENGTH,
} from "constant/limit";

// 맛집 이름 유효성 검사 조건을 정의합니다.
export const validateRestaurantNameLength = {
  condition: (value: string): boolean => {
    if (value?.length > RESTAURANT_NAME_MAX_LENGTH) return false;
    return true;
  },
  messageOnError: `맛집 이름은 ${RESTAURANT_NAME_MAX_LENGTH}자 이내로 입력해주세요.`,
};

export const validateRestaurantNameEmpty = {
  condition: (value: string): boolean => {
    if (!value) return false;
    if (value?.length === 0) return false;
    return true;
  },
  messageOnError: "맛집 이름을 입력해주세요.",
};

// 맛집 한줄평 유효성 검사 조건을 정의합니다.
export const validateRestaurantCommentLength = {
  condition: (value: string): boolean => {
    if (value?.length > RESTAURANT_COMMENT_MAX_LENGTH) return false;
    return true;
  },
  messageOnError: `맛집 한줄평은 ${RESTAURANT_COMMENT_MAX_LENGTH}자 이내로 입력해주세요.`,
};

// 맛집 주소 유효성 검사 조건을 정의합니다.
export const validateRestaurantAddressLength = {
  condition: (value: string): boolean => {
    if (value?.length > RESTAURANT_ADDRESS_MAX_LENGTH) return false;
    return true;
  },
  messageOnError: `맛집 주소는 ${RESTAURANT_ADDRESS_MAX_LENGTH}자 이내로 입력해주세요.`,
};
