import styled from "@emotion/styled";
import RestaurantForm from "feature/restaurants/components/RestaurantForm";

const ViewRestaurantEdit = () => {
  return (
    <EmotionWrapper>
      <RestaurantForm isEditMode />
    </EmotionWrapper>
  );
};

export default ViewRestaurantEdit;

const EmotionWrapper = styled.div``;
