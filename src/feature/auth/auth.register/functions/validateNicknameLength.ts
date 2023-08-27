import {
  NICKNAME_LENGTH_LIMIT_MAX,
  NICKNAME_LENGTH_LIMIT_MIN,
} from "feature/auth/auth.register/constants/nicknameLengthLimit";

export const validateNicknameLength = (nickname: string): boolean => {
  return (
    nickname.length >= NICKNAME_LENGTH_LIMIT_MIN && nickname.length <= NICKNAME_LENGTH_LIMIT_MAX
  );
};
