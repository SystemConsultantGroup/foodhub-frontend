// create an array of birth year dropdown values from 1900 to current year - 10
export const BIRTH_YEAR_DROPDOWN_VALUE_LIST = Array.from(
  { length: new Date().getFullYear() - 1900 - 10 },
  (_, i) => ({
    value: String(new Date().getFullYear() - i - 10),
    label: String(new Date().getFullYear() - i - 10),
  })
);
