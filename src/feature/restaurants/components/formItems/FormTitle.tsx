import styled from "@emotion/styled";

interface Props {
  isEditMode?: boolean;
}

const FormTitle: React.FC<Props> = ({ isEditMode = false }) => {
  return <EmotionWrapper>{isEditMode ? "맛집 수정" : "맛집 등록"}</EmotionWrapper>;
};

export default FormTitle;

const EmotionWrapper = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
`;
