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
        <StyledTagItem key={index} deletable={deletable}>
          {React.cloneElement(child, {
            onClick: () => handleTagItemClick(index),
          })}
          <StyledDeleteIcon onClick={() => handleTagItemClick(index)}>
            <DeleteIcon size={12} />
          </StyledDeleteIcon>
        </StyledTagItem>
      );
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
  position: relative;
  display: inline-block;
  &:hover {
    cursor: ${(props) => (props.deletable ? "pointer" : "default")};
  }
`;

const StyledDeleteIcon = styled.div`
  position: absolute;
  top: -5px;
  right: 0px;
  &:hover {
    cursor: pointer;
  }
`;

Tags.Item = TagItem;
