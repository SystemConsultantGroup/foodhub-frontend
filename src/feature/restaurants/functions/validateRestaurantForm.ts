import {
  RESTAURANT_ADDRESS_MAX_LENGTH,
  RESTAURANT_CAPACITY_MAX_VALUE,
  RESTAURANT_CAPACITY_MIN_VALUE,
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

// 맛집 최대 수용 인원 유효성 검사 조건을 정의합니다.
export const validateRestaurantCapacityMin = {
  condition: (value: string): boolean => {
    if (Number(value) < RESTAURANT_CAPACITY_MIN_VALUE) return false;
    return true;
  },
  messageOnError: `맛집 최대 수용 인원은 ${RESTAURANT_CAPACITY_MIN_VALUE}명 이상이어야 합니다.`,
};
export const validateRestaurantCapacityMax = {
  condition: (value: string): boolean => {
    if (Number(value) > RESTAURANT_CAPACITY_MAX_VALUE) return false;
    return true;
  },
  messageOnError: `맛집 최대 수용 인원은 ${RESTAURANT_CAPACITY_MAX_VALUE}명 이하여야 합니다.`,
};
