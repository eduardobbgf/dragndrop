import { ItemContainer } from "./styled";

const Item = ({ dragOptions, item, index, columnId }) => {
  return (
    <ItemContainer
      draggable
      onDragStart={(e) => dragOptions.dragStart(e, index, columnId)}
      onDragEnter={(e) => dragOptions.drag(e, index, columnId)}
      onDragEnd={(e) => dragOptions.dragEnd(e, index, columnId)}
    >
      {item}
    </ItemContainer>
  );
};

export default Item;
