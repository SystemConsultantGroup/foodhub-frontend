import styled from "@emotion/styled";

interface Props {
  label: string;
  value: string;
}

const MyPageInfoItem = ({ label, value }: Props) => {
  return (
    <EmotionWrapper>
      <p className="label">{label}</p>
      <p className="value">{value}</p>
    </EmotionWrapper>
  );
};

export default MyPageInfoItem;

const EmotionWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;

  .label {
    font-size: 12px;
    color: ${({ theme }) => theme.color.gray400};
    min-width: 60px;
  }

  .value {
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};
  }
`;
