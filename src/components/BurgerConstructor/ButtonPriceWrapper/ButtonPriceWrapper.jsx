import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { sendingOrder } from "../../../services/actions/orderDetails";
import ButtonPriceWrapperStyles from "./ButtonPriceWrapper.module.css";

export function ButtonPriceWrapper() {
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
    <div
      className={`${ButtonPriceWrapperStyles.constructor_button_wrapper} mt-10`}
    >
      <div
        className={`${ButtonPriceWrapperStyles.constructor_price_box} mr-10`}
      >
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
