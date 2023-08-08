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

  return <EmotionWrapper {...props}>{tagItemsWithOnClick}</EmotionWrapper>;
};

export default Tags;

const EmotionWrapper = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: flex-start;
`;

Tags.Item = TagItem;
