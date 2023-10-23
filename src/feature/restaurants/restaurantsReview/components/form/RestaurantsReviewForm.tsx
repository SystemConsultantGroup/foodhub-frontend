import styled from "@emotion/styled";
import Rating from "components/rating/Rating";
import RestaurantDetailHeaderSection from "feature/restaurants/restaurantsDetail/components/section/RestaurantDetailHeaderSection";
import Button from "components/button/Button";
import TextInput from "components/inputs/TextInput/TextInput";
import { useState } from "react";
import Radio from "components/radio/Radio";

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

  const handleScoreChange = (value: number) => {
    setSelectedScore(value);
  };

  const handleContentChagne = (value: string) => {
    setEnteredContent(value);
  };

  const handleOnSubmit = () => {
    console.log("점수 : ", selectedScroe);
    console.log("리뷰 내용 : ", enteredContent);
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
      <div className="radioDiv">
        <Radio.Group>
          <Radio name="공개" value="public" initialValue>
            공개
          </Radio>
          <Radio name="비공개" value="private">
            비공개
          </Radio>
        </Radio.Group>
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
  gap: 40px;

  textarea {
    font-size: 16px;
  }
  button {
    font-size: 16px;
  }

  .radioDiv {
    margin-top: -15px;
    width: 100%;
    display: flex;
    justify-content: right;
  }
`;
