// 닉네임 최대 글자수 제한, 파일 업로드 최대 용량 제한 등 각종 제한 사항을 정의하는 파일입니다.
export const NICKNAME_MAX_LENGTH = 10;
export const ORGANIZATION_NAME_MAX_LENGTH = 15;
export const ORGANIZATION_PASSWORD_MIN_LENGTH = 4;
export const ORGANIZATION_PASSWORD_MAX_LENGTH = 15;

export const ORGANIZATION_IMAGE_MAX_COUNT = 1;
// 맛집 생성 관련 제약
export const RESTAURANT_NAME_MAX_LENGTH = 10; // 맛집 이름 최대 길이
export const RESTAURANT_COMMENT_MAX_LENGTH = 30; // 맛집 한줄평 최대 길이
export const RESTAURANT_ADDRESS_MAX_LENGTH = 30; // 맛집 주소 최대 길이
export const RESTAURANT_OPENING_HOUR_MAX = 30; // 맛집 운영 시간 최대 길이
export const RESTAURANT_RECOMMENDED_MENU_MAX_COUNT = 10; // 맛집 추천 메뉴 최대 개수
export const RESTAURANT_ORDER_TIP_MAX_LENGTH = 30; // 맛집 주문 팁 최대 길이
export const RESTAURANT_LINK_MAX_LENGTH = 200; // 맛집 링크 최대 길이
export const RESTAURANT_IMAGES_MAX_COUNT = 10; // 맛집 이미지 최대 개수
export const RESTAURANT_CAPACITY_MIN_VALUE = 1; // 맛집 수용인원 최소 수
export const RESTAURANT_CAPACITY_MAX_VALUE = 1000; // 맛집 수용인원 최대 수
