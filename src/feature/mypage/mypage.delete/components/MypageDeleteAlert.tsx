import styled from "@emotion/styled";
import IconWarningOutlined from "components/icons/IconWarningOutlined";

const MypageDeleteAlert = () => {
  return (
    <EmotionWrapper>
      <IconWarningOutlined />

      <p className="warning-title">회원 탈퇴 시, 아래의 정보가 삭제됩니다. </p>
      <ul>
        <li className="deleted-item">회원 정보</li>
        <li className="deleted-item">내가 속한 단체의 소속상태</li>
      </ul>
      <p className="warning-disclaimer">
        단, 내가 생성한 맛집, 투표, 모임 정보 등은 유지되며, 생성자의 정보에 &apos;탈퇴한 유저&apos;
        라고 표시됩니다.{" "}
      </p>
    </EmotionWrapper>
  );
};

export default MypageDeleteAlert;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .warning-title {
    font-size: 16px;
    font-weight: 700;
    margin-top: 32px;
    margin-bottom: 24px;
  }

  .deleted-item {
    margin-bottom: 4px;

    &:before {
      content: "•";
      margin-right: 8px;
    }
  }

  .warning-disclaimer {
    font-size: 12px;
    margin-top: 32px;
    color: ${({ theme }) => theme.color.gray400};
    line-height: 1.5;
  }
`;
