import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrop } from "react-dnd";
import { IItem, useDispatch, useSelector } from "../../../services/types";
import { addBun, addIngredient } from "../../../services/actions/constructor";
import constructorItemsStyles from "../ConstructorItems/ConstructorItems.module.css";
import { ConstructorList } from "../ConstructorList/ConstructorList";

export interface IItemBun extends IItem {
  type: "bun";
};

export function ConstructorItems() {
  const dispatch = useDispatch();

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item: IItemBun) {
      if (item.type === "bun") {
        dispatch(addBun(item));
      } else if (item.type !== "bun" && dataBun) {
        dispatch(addIngredient(item));
      }
    },
  });
  const dataBun = useSelector((store) => store.burgerConstructor.bun);
  const ingredients = useSelector((store) => store.burgerConstructor.items);

  return (
    <div
      className={`${constructorItemsStyles.constructor_wrapper} mt-25 pr-4`}
      ref={dropTarget}
    >
      {dataBun === null ? (
        <div className={constructorItemsStyles.constructor_list_empty}>
          <p className={constructorItemsStyles.constructor_list_empty_title}>
            Перетащите нужную булочку сюда
          </p>
        </div>
      ) : (
        <>
          <div className="mb-4 mr-4">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${dataBun?.name}(верх)`}
              price={dataBun?.price!}
              thumbnail={dataBun?.image!}
            />
          </div>

          {ingredients.length === 0 ? (
            <div
              className={constructorItemsStyles.constructor_list_empty_small}
            >
              <p
                className={constructorItemsStyles.constructor_list_empty_title}
              >
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
              text={`${dataBun?.name}(низ)`}
              price={dataBun?.price!}
              thumbnail={dataBun?.image!}
            />
          </div>
        </>
      )}
    </div>
  );
}
