import styled from "@emotion/styled";
import { interactiveShadow } from "styles/shadow/interactiveShadow";

interface Props {
  title?: string;
  description?: string;
}

const PageMarker = ({
  title = "푸드허브",
  description = "나만의 맛집 저장소 - 푸드허브",
}: Props) => {
  return (
    <EmotionWrapper>
      <p className="under-construction">🚧 공사중 🚧</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </EmotionWrapper>
  );
};

export default PageMarker;

const EmotionWrapper = styled.div`
  // center on screen
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // center items
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;

  min-width: 300px;

  ${interactiveShadow}

  p.under-construction {
    font-size: 12px;
    color: ${({ theme }) => theme.color.gray500};
    margin-bottom: 10px;
  }

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    color: {
      ${({ theme }) => theme.color.gray500}
    }
    line-height: 1.5;
  }
`;
