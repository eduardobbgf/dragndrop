import { ItemContainer } from "./styled";

const Item = ({ dragOptions, item, index }) => {
  return (
    <ItemContainer
      draggable
      onDragStart={(e) => dragOptions.dragStart(e, index)}
      onDragEnter={(e) => dragOptions.drag(e, index)}
      onDragEnd={(e) => dragOptions.dragEnd(e, index)}
    >
      {item}
    </ItemContainer>
  );
};

export default Item;
