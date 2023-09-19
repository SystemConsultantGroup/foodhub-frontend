import { TRestaurantFormValues } from "feature/restaurants/types/TRestaurantFormValues";

export interface TRestaurantFormCommonProps {
  isEditMode?: boolean;
  formValues: TRestaurantFormValues;
  setFormValues: React.Dispatch<React.SetStateAction<TRestaurantFormValues>>;
}
