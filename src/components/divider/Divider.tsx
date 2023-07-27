import styled from "@emotion/styled";

interface Props {
  width?: number; // in pixels, default: 100% of container
}

function Divider(props: Props) {
  return (
    <EmotionWrapper {...props}>
      <hr />
    </EmotionWrapper>
  );
}

export default Divider;

const EmotionWrapper = styled.div<Props>`
  hr {
    height: 1px;
    width: ${({ width }) => `${width}px` ?? "100%"};
    box-shadow: ${({ theme }) => theme.shadow.default};
    background: ${({ theme }) => theme.color.primary400};
  }
`;
