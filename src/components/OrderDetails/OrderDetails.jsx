import { useSelector } from "react-redux";
import orderStyles from "./OrderDetails.module.css";

function OrderDetails() {
  const orderNumber = useSelector((store) => store.orderDetails.orderNumber);
  return (
    <div className={`${orderStyles.modal_wrapper} pb-30 pt-30`}>
      <div className={orderStyles.content_wrapper}>
        <h1 className="text text_type_digits-large">{orderNumber}</h1>
        <p className="text text_type_main-medium mt-8">Идентификатор заказа</p>
        <div className={`${orderStyles.modal_button} mt-15`} />
        <p className="text text_type_main-default mt-15">
          Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-default text_color_inactive mt-2">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </div>
  );
}

export default OrderDetails;
