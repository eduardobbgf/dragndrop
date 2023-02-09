import { useState, useRef } from "react";
import Item from "../Item/Item";
import { Container, Column } from "./styled";

const Columns = () => {
  const [itensColumn1, setItensColumn1] = useState([1, 2, 3, 4]);
  const [itensColumn2, setItensColumn2] = useState([]);

  const itemDragged = useRef();
  const placeDragged = useRef();
  const columnEnd = useRef();
  const columnPos = useRef();
  const dragStart = (e, index) => {
    itemDragged.current = index;
    console.log(index);
  };

  const drag = (e, position) => {
    placeDragged.current = position;
  };

  const dragEnd = (e, index) => {
    itemDragged.content = itensColumn1[itemDragged.current];
    const temp = [...itensColumn1];
    temp.splice(itemDragged.current, 1);
    temp.splice(placeDragged.current, 0, itemDragged.content);
    console.log(temp);
    setItensColumn1(temp);
    // setItensColumn2([
    //   ...itensColumn1.splice(placeDragged.position, 0, placeDragged.content),
    // ]);
    console.log("drag end");
  };

  const dragOptions = {
    drag: drag,
    dragEnd: dragEnd,
    dragStart: dragStart,
  };
  return (
    <Container>
      <Column key={1}>
        {itensColumn1.map((item, index) => (
          <Item
            dragOptions={dragOptions}
            key={item}
            item={item}
            index={index}
          ></Item>
        ))}
      </Column>
      <Column key={2}>
        {itensColumn2.map((item, index) => (
          <Item
            dragOptions={dragOptions}
            key={item}
            item={item}
            index={index}
          ></Item>
        ))}
      </Column>
    </Container>
  );
};

export default Columns;
