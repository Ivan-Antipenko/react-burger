import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "../../../services/types";
import { Link } from "react-router-dom";
import { sendingOrder } from "../../../services/actions/orderDetails";
import buttonPriceWrapperStyles from './ButtonPriceWrapper.module.css'

export function ButtonPriceWrapper() {
  const isLogin = useSelector((store) => store.register.isLogin);
  const dispatch = useDispatch();
  function sendOrder(orderId: string[]) {
    dispatch(sendingOrder(orderId));
  }

  const ingredients = useSelector((store) => store.burgerConstructor.items);
  const dataBun = useSelector((store) => store.burgerConstructor.bun);
  const ingridientsId = ingredients.map((el) => el._id);
  const orderId = [...ingridientsId, dataBun?._id!, dataBun?._id!];
  const cash = useSelector((store) => store.burgerConstructor.cash);
  const isOrderLoading = useSelector((store) => store.orderDetails.isLoading);
  return (
    <div
      className={`${buttonPriceWrapperStyles.constructor_button_wrapper} mt-10`}
    >
      <div
        className={`${buttonPriceWrapperStyles.constructor_price_box} mr-10`}
      >
        <p className="text text_type_digits-medium mr-2">{cash}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div>
        {!isLogin && (
          <Link to="/login">
            <Button
              htmlType="button"
              type="primary"
              size="large"
              disabled={ingredients.length === 0}
            >
              Оформить заказ
            </Button>
          </Link>
        )}

        {isLogin && (
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={() => sendOrder(orderId)}
            disabled={ingredients.length === 0 || isOrderLoading}
          >
            {!isOrderLoading ? <>Оформить заказ</> : <>Собираем бургер...</>}
          </Button>
        )}
      </div>
    </div>
  );
}