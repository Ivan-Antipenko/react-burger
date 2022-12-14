import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import ordersStyles from "./OrdersStory.module.css";

export function OrdersStory({ order }) {
  const { createdAt, number, name } = order;
  const ingredients = useSelector(
    (store) => store.ingredients.burgerIngredients
  );
  const ingrList = order.ingredients;
  let resArr = [];
  for (let el of ingredients) {
    for (let id of ingrList) {
      if (el._id === id) {
        resArr.push(el);
      }
    }
  }
  let totalPrice = 0;
  resArr.map((el) => {
    totalPrice += el.price;
  });

  const maxLength = resArr.length;
  const hideItems = maxLength - 6;

  return (
    <div className={`${ordersStyles.feed_item} mb-6 pt-6 pb-6 pl-6 pr-6 mr-2`}>
      <div className={ordersStyles.content_wrapper}>
        <div className={ordersStyles.tittle_wrapper}>
          <p className="text text_type_digits-default">#{number}</p>
          <p className="text text_type_main-default text_color_inactive">
            {createdAt}
          </p>
        </div>
        <p className="text text_type_main-medium mt-6">{name}</p>
        <div className={`${ordersStyles.ingredient_and_price_wrapper} mt-6`}>
          <ul className={ordersStyles.ingredients_wrapper}>
            {maxLength <= 5 &&
              resArr.map((el, index) => (
                <li className={ordersStyles.ingredient_box} key={index}>
                  <div className={ordersStyles.image_wrapper}>
                    <div className={ordersStyles.inside_image_wrapper}>
                      <img
                        className={ordersStyles.image}
                        src={el.image_mobile}
                      />
                    </div>
                  </div>
                </li>
              ))}
            {maxLength >= 6 &&
              resArr.slice(0, 5).map((el, index) => (
                <li className={ordersStyles.ingredient_box} key={index}>
                  <div className={ordersStyles.image_wrapper}>
                    <div className={ordersStyles.inside_image_wrapper}>
                      <img
                        className={ordersStyles.image}
                        src={el.image_mobile}
                      />
                    </div>
                  </div>
                </li>
              ))}
            {maxLength > 6 &&
              resArr.slice(5, 6).map((el, index) => (
                <li className={ordersStyles.ingredient_box} key={index}>
                  <div className={ordersStyles.image_wrapper}>
                    <div className={ordersStyles.inside_image_wrapper}>
                      <div className={ordersStyles.hidden_wrapper}>
                        <div className={ordersStyles.inside_image_wrapper}>
                          <img
                            src={el.image_mobile}
                            className={ordersStyles.hidden_image}
                          />
                        </div>

                        <p
                          className={`${ordersStyles.hidden_text} text text_type_main-default`}
                        >
                          +{hideItems}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          <div className={ordersStyles.price_wrapper}>
            <p className="text text_type_digits-default mr-2">{totalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
