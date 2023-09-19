export const validateDeleteConfirmMessage = {
  condition: (value: string): boolean => {
    if (value !== "탈퇴") return false;
    return true;
  },
  messageOnError: "'탈퇴' 를 입력해주세요.",
};
