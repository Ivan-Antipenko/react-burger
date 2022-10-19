import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import detailsStyles from "./FeedsDetails.module.css";

export function FeedDetails() {
  const orders = useSelector((store) => store.wsReducer.orders);
  const ingredients = useSelector(
    (store) => store.ingredients.burgerIngredients
  );
  const { id } = useParams();
  const order = orders?.find((el) => el._id === id);
  const ingrList = order.ingredients;

  let resArr = [];
  let dublicates = [];

  for (let el of ingredients) {
    for (let id of ingrList) {
      if (el._id === id) {
        resArr.push(el);
      }
    }
  }

  console.log(dublicates);

  return (
    <div className={detailsStyles.wrapper}>
      <div>
        <p className={`${detailsStyles.number} text text_type_digits-default`}>
          #{order.number}
        </p>
        <p className={`${detailsStyles.name}text text_type_main-medium mt-10`}>
          {order.name}
        </p>
        {order.status === "done" && (
          <p className="text text_type_main-default mt-3">Выполнен</p>
        )}
        <p className="text text_type_main-medium mt-15">Состав:</p>
        <div>
          <ul className={detailsStyles.ingr_wrapper}>
            {resArr.map((el, index) => {
              return (
                <li className={detailsStyles.ingr_item} key={index}>
                  <div className={detailsStyles.image_wrapper}>
                    <img src={el.image_mobile} />
                    <p className="text text_type_main-default">{el.name}</p>
                  </div>

                  <div className={detailsStyles.price_wrapper}>
                    <p>{el.price}</p>
                    <CurrencyIcon />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <p>{order.createdAt}</p>
      </div>
      <div></div>
    </div>
  );
}
