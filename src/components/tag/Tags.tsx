import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
import TagItem, { TagItemProps } from "components/tag/TagItem";
import React, { useState } from "react";
import DeleteIcon from "components/tag/DeleteIcon";

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
      return (
        <div className="tagItem" key={index}>
          {React.cloneElement(child, {
            onClick: () => handleTagItemClick(index),
          })}
          <div className="deleteIcon" onClick={() => handleTagItemClick(index)}>
            <DeleteIcon size={12} />
          </div>
        </div>
      );
    }
    return child;
  });

  return (
    <EmotionWrapper {...props} deletable={deletable}>
      {tagItemsWithOnClick}
    </EmotionWrapper>
  );
};

export default Tags;

const EmotionWrapper = styled.div<Props & { deletable: boolean }>`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  div.tagItem {
    position: relative;
    display: inline-block;
    &:hover {
      cursor: ${(props) => (props.deletable ? "pointer" : "default")};
    }
  }

  div.deleteIcon {
    position: absolute;
    top: -5px;
    right: 0px;
    &:hover {
      cursor: pointer;
    }
  }
`;

Tags.Item = TagItem;
