import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { IItem, useDispatch } from "../../../services/types";
import {
  deleteIngredient,
  dropIngredient,
} from "../../../services/actions/constructor";
import { useRef } from "react";
import counstructorItemStyles from "./ConstructorItem.module.css";

interface IConstructorItem {
  el: IItem;
  index: number
}

export function ConstructorItem(props: IConstructorItem) {

  const dispatch = useDispatch();
  const ref = useRef(null);
  const index = props.index;

  const [{ opacity }, drag] = useDrag({
    type: "element",
    item: { index },
    collect: (monitor) => {
      return {
        opacity: monitor.isDragging() ? 0.5 : 1,
      };
    },
  });

  const [, drop] = useDrop({
    accept: "element",
    drop(item: {index: number}) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      dispatch(dropIngredient({ dragIndex, hoverIndex }));
    },
  });

  drag(drop(ref));

  return (
    <li
      className={`${counstructorItemStyles.constructor_list_item} mb-4`}
      ref={ref}
      style={{ opacity }}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={props.el.name}
        price={props.el.price}
        thumbnail={props.el.image}
        handleClose={() => dispatch(deleteIngredient(props.el))}
      />
    </li>
  );
}
