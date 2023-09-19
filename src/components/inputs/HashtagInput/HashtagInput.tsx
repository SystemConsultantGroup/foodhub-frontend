import styled from "@emotion/styled";
import HashtagItem from "components/inputs/HashtagInput/items/HashtagItem";
import TextInput from "components/inputs/TextInput/TextInput";
import { useCallback, useEffect, useState } from "react";

interface Props {
  hashtagList: string[];
  setHashTagList: (hashtagList: string[]) => void;
}

type TTextInput = {
  value: string;
  isValid: boolean;
};

const HashtagInput: React.FC<Props> = ({ hashtagList, setHashTagList }) => {
  const [currentInput, setCurrentInput] = useState<TTextInput>({
    value: "",
    isValid: false,
  });

  useEffect(() => {
    if (currentInput.value.includes(",") && currentInput.isValid) {
      const newHashtagList = [...hashtagList, currentInput.value.replace(",", "")];
      setHashTagList(newHashtagList);
      setCurrentInput({ value: "", isValid: false });
    }
  }, [currentInput, hashtagList, setHashTagList]);

  const handleChangeCurrentInput = useCallback((value: string, isValid: boolean) => {
    setCurrentInput({ value, isValid });
  }, []);

  const handleRemoveHashtag = useCallback(
    (hashtag: string) => {
      const newHashtagList = hashtagList.filter((item) => item !== hashtag);
      setHashTagList(newHashtagList);
    },
    [hashtagList, setHashTagList]
  );

  return (
    <EmotionWrapper>
      <TextInput
        conditionList={["쉼표로 구분하여 메뉴를 추가하세요!"]}
        value={currentInput.value}
        onTextChange={handleChangeCurrentInput}
      />
      <ul className="hashtag-container">
        {hashtagList.map((item) => (
          <HashtagItem key={item} onClick={handleRemoveHashtag}>
            {item}
          </HashtagItem>
        ))}
      </ul>
    </EmotionWrapper>
  );
};

export default HashtagInput;

const EmotionWrapper = styled.div`
  ul.hashtag-container {
    margin-top: 8px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 8px;
  }
`;
