import styled from "@emotion/styled";
import Rating from "components/rating/Rating";
import RestaurantDetailHeaderSection from "feature/restaurants/restaurantsDetail/components/section/RestaurantDetailHeaderSection";
import Button from "components/button/Button";
import TextInput from "components/inputs/TextInput/TextInput";
import { useState, useCallback } from "react";
import Checkbox from "components/checkbox/Checkbox";

interface Props {
  restaurantId: string | number | string[];
  isEditMode: boolean;
  reviewId?: string | number | string[];
  score?: number;
  content?: string;
}

const RestaurantsReviewForm: React.FC<Props> = ({ restaurantId, score = 0, content = "" }) => {
  const [selectedScroe, setSelectedScore] = useState<number>(score);
  const [enteredContent, setEnteredContent] = useState<string>(content);
  const [isPublic, setIsPublic] = useState<boolean>(true);

  /**
   * TODO: restaurantId로 맛집 상세정보 불러오기
   */

  const contentMaxLengthCheck = {
    condition: (content: string) => {
      return content.length <= 500;
    },
    messageOnError: "500자 이내로 작성해주세요.",
  };

  const contentMinLengthCheck = {
    condition: (content: string) => {
      return content.length >= 20;
    },
    messageOnError: "20자 이상 작성해주세요.",
  };

  const handleScoreChange = useCallback((value: number) => {
    setSelectedScore(value);
  }, []);

  const handleContentChagne = useCallback((value: string) => {
    setEnteredContent(value);
  }, []);

  const handleSetIsPublic = useCallback((value: string) => {
    if (value === "true") setIsPublic(true);
    else setIsPublic(false);
  }, []);

  const handleOnSubmit = () => {
    console.log("점수 : ", selectedScroe);
    console.log("리뷰 내용 : ", enteredContent);
    console.log("공개 여부 : ", isPublic);
  };

  return (
    <EmotionWrapper>
      <RestaurantDetailHeaderSection
        restaurantId={restaurantId}
        restaurantName="봉수육"
        restaurantAddress="경기도 수원시 천천동"
        organizationName="시스템 컨설턴트 그룹"
        isMain={false}
      />
      <Rating value={score} isInput onSelectedValueChange={handleScoreChange} />
      <TextInput
        label="리뷰 내용"
        placeholder="맛집에 대한 솔직한 평을 작성해주세요!"
        multiline
        value={content}
        onTextChange={handleContentChagne}
        conditionCheckList={[contentMaxLengthCheck, contentMinLengthCheck]}
        height="150px"
      />
      <div className="right-alignment">
        <p className="label">리뷰 공개 여부를 설정해주세요.</p>
        <Checkbox.Group
          checkedList={[String(isPublic)]}
          setCheckedItem={(value) => handleSetIsPublic(value)}
        >
          <Checkbox.Item value="true">공개</Checkbox.Item>
          <Checkbox.Item value="false">비공개</Checkbox.Item>
        </Checkbox.Group>
        {!isPublic && (
          <p className="description">비공개로 설정시, 단체 외부인에게는 리뷰가 보이지 않습니다.</p>
        )}
      </div>
      <Button onClick={handleOnSubmit} fullWidth>
        작성 완료
      </Button>
    </EmotionWrapper>
  );
};

export default RestaurantsReviewForm;

const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  textarea {
    font-size: 16px;
  }

  button {
    font-size: 16px;
  }

  .right-alignment {
    margin-top: -15px;
    width: 100%;
  }

  .label {
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 2px;
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.color.gray600};
  }

  .description {
    margin-top: 5px;
    margin-left: 2px;
    font-size: 14px;
    font-weight: 200;
    color: ${({ theme }) => theme.color.gray600};
  }
`;
