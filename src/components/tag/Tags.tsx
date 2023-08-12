import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
import TagItem, { TagItemProps } from "components/tag/TagItem";
import React, { useState } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  deletable?: boolean;
}

const Tags = ({ children, deletable = false, ...props }: Props) => {
  const [tagItems, setTagItems] = useState(children);

  const handleTagItemClick = (index: number) => {
    const newTagItems = React.Children.toArray(tagItems).filter((_, idx) => idx !== index);
    setTagItems(newTagItems);
  };

  const tagItemsWithOnClick = React.Children.map(tagItems, (child, index) => {
    if (deletable && React.isValidElement<TagItemProps>(child)) {
      return React.cloneElement(child, {
        onClick: () => handleTagItemClick(index),
      });
    }
    return child;
  });

  return (
    <EmotionWrapper {...props}>
      <StyledTagItem deletable={deletable}>{tagItemsWithOnClick}</StyledTagItem>
    </EmotionWrapper>
  );
};

export default Tags;

const EmotionWrapper = styled.div<Props>`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const StyledTagItem = styled.div<{ deletable: boolean }>`
  &:hover {
    cursor: ${(props) => (props.deletable ? "pointer" : "default")};
  }
`;

Tags.Item = TagItem;
