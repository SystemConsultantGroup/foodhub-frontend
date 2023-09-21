import { TRadioItem } from "components/radio/types/TRadioItem";

export type TTagIdName = "mood" | "value" | "kind" | "liquor";

export type TTagIdRadioItem = TRadioItem & {
  name: TTagIdName;
};

export const RESTAURANT_TAG_IDS_ITEM_LIST: TTagIdRadioItem[] = [
  {
    value: "1",
    name: "mood",
    label: "분위기 좋은",
  },
  {
    value: "2",
    name: "value",
    label: "가성비 좋은",
  },
  {
    value: "3",
    name: "kind",
    label: "서비스 좋은",
  },
  {
    value: "4",
    name: "liquor",
    label: "술마시기 좋은",
  },
];
