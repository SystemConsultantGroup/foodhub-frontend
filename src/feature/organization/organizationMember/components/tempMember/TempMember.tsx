import styled from "@emotion/styled";

interface Props {
  id?: number;
  imgSrc?: string;
  memberName?: string;
}

const TempMember: React.FC<Props> = ({ memberName }) => {
  return (
    <EmotionWrapper>
      <p>{memberName}</p>
    </EmotionWrapper>
  );
};

export default TempMember;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 70px;
  border-radius: 6px;
  padding: 10px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray100};
`;
