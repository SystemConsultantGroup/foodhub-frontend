export type TConditionCheck = {
  condition: (text: string) => boolean;
  messageOnError: string;
};
