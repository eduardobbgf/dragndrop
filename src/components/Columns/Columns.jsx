import { useState, useRef } from "react";
import Item from "../Item/Item";
import { Container, Column } from "./styled";
const columnsMockup = [
  {
    id: 1,
    itens: [
      { id: 1, name: "1" },
      { id: 2, name: "2" },
      { id: 5, name: "5" },
      { id: 7, name: "7" },
    ],
  },
  {
    id: 2,
    itens: [
      { id: 3, name: "3" },
      { id: 4, name: "4" },
      { id: 8, name: "8" },
      { id: 9, name: "9" },
    ],
  },
];

const Columns = () => {
  const [columns, setColumns] = useState(columnsMockup);

  const itemDragged = useRef();
  const placeDragged = useRef();

  const dragStart = (e, index, columnId) => {
    itemDragged.current = index;
    itemDragged.columnId = columnId;
  };

  const drag = (e, position, columnId) => {
    placeDragged.current = position;
    placeDragged.columnId = columnId;
  };

  const dragEnd = (e, index, columnId) => {
    itemDragged.content = columns.find(
      (col) => col.id === itemDragged.columnId
    ).itens[itemDragged.current];

    const temp = [...columns];
    temp
      .find((col) => col.id === itemDragged.columnId)
      .itens.splice(itemDragged.current, 1);
    temp
      .find((col) => col.id === placeDragged.columnId)
      .itens.splice(placeDragged.current, 0, itemDragged.content);
    setColumns(temp);

    itemDragged.current = null;
    placeDragged.current = null;
  };

  const dragOptions = {
    drag: drag,
    dragEnd: dragEnd,
    dragStart: dragStart,
  };

  return (
    <Container>
      {columns.map((col) => (
        <Column key={col.id}>
          {col.itens.map((item, index) => (
            <Item
              dragOptions={dragOptions}
              key={item.id}
              item={item.name}
              index={index}
              columnId={col.id}
            ></Item>
          ))}
        </Column>
      ))}
    </Container>
  );
};

export default Columns;
