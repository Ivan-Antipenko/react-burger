import constructorStyles from "./BurgerConstructor.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import {
  addIngredients,
  deleteIngredient,
  DROP_INGREDIENT,
} from "../../services/actions/constructor";
import { sendingOrder } from "../../services/actions/orderDetails";
import { useRef } from "react";

function BurgerConstructor() {
  return (
    <section className={constructorStyles.constructor_section}>
      <ConstructorItems />
      <ButtonPriceWrapper />
    </section>
  );
}
function ConstructorItems() {
  const dispatch = useDispatch();

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      dispatch(addIngredients(item, dataBun));
    },
  });

  const dataBun = useSelector((store) => store.burgerConstructor.bun);
  const ingredients = useSelector((store) => store.burgerConstructor.items);

  return (
    <div
      className={`${constructorStyles.constructor_wrapper} mt-25 pr-4`}
      ref={dropTarget}
    >
      {!dataBun ? (
        <div className={constructorStyles.constructor_list_empty}>
          <p className={constructorStyles.constructor_list_empty_title}>
            Перетащите нужную булку сюда...
          </p>
        </div>
      ) : (
        <>
          <div className="mb-4 mr-4">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${dataBun.name}(верх)`}
              price={dataBun.price}
              thumbnail={dataBun.image}
            />
          </div>

          {ingredients.length === 0 ? (
            <div className={constructorStyles.constructor_list_empty_small}>
              <p className={constructorStyles.constructor_list_empty_title}>
                А теперь любой ингредиент!
              </p>
            </div>
          ) : (
            <ConstructorList />
          )}

          <div className="mb-4 mr-4">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${dataBun.name}(низ)`}
              price={dataBun.price}
              thumbnail={dataBun.image}
            />
          </div>
        </>
      )}
    </div>
  );
}

function ConstructorList() {
  const ingredients = useSelector((store) => store.burgerConstructor.items);

  return (
    <ul className={constructorStyles.constructor_list}>
      {ingredients.map((el, index) => (
        <ConstructorItem el={el} index={index} key={el.uniCode} />
      ))}
    </ul>
  );
}

function ConstructorItem(props) {
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
      className={`${constructorStyles.constructor_list_item} mb-4`}
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

function ButtonPriceWrapper() {
  const dispatch = useDispatch();
  function sendOrder(orderId) {
    dispatch(sendingOrder(orderId));
  }

  const ingredients = useSelector((store) => store.burgerConstructor.items);
  const dataBun = useSelector((store) => store.burgerConstructor.bun);
  const ingridientsId = ingredients.map((el) => el._id);
  const orderId = [...ingridientsId, dataBun._id];
  const cash = useSelector((store) => store.burgerConstructor.cash);
  return (
    <div className={`${constructorStyles.constructor_button_wrapper} mt-10`}>
      <div className={`${constructorStyles.constructor_price_box} mr-10`}>
        <p className="text text_type_digits-medium mr-2">{cash}</p>
        <CurrencyIcon type="primary" size="large" />
      </div>
      {ingredients.length === 0 ? (
        <Button type="primary" size="large" disabled>
          Оформить заказ
        </Button>
      ) : (
        <Button type="primary" size="large" onClick={() => sendOrder(orderId)}>
          Оформить заказ
        </Button>
      )}
    </div>
  );
}

export default BurgerConstructor;
