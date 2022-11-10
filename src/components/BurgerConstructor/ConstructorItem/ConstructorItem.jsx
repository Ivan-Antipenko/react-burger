import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import {
  deleteIngredient,
  DROP_INGREDIENT,
} from "../../../services/actions/constructor";
import { useRef } from "react";
import counstructorItemStyles from "./ConstructorItem.module.css";

export function ConstructorItem(props) {
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
    drop(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      dispatch({
        type: DROP_INGREDIENT,
        data: { dragIndex, hoverIndex },
      });
    },
  });

  drag(drop(ref));

  return (
    <li
      className={`${counstructorItemStyles.constructor_list_item} mb-4`}
      ref={ref}
      style={{ opacity }}
    >
      <DragIcon />
      <ConstructorElement
        text={props.el.name}
        price={props.el.price}
        thumbnail={props.el.image}
        handleClose={() => dispatch(deleteIngredient(props.el))}
      />
    </li>
  );
}
