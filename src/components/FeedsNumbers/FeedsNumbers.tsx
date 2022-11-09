import { useSelector } from "../../services/types";
import feedNumbresStyles from "./FeedsNumbers.module.css";

export function FeedsNumbers() {
  const orders = useSelector((store) => store.wsReducer.orders);
  const total = useSelector((store) => store.wsReducer.total);
  const totalToday = useSelector((store) => store.wsReducer.totalToday);
  const doneArray = orders.filter((el) => el.status === "done");
  const pendingArray = orders.filter((el) => el.status === "pending");

  return (
    <>
      <div>
        <div className={feedNumbresStyles.status_container}>
          <div className={feedNumbresStyles.ready_wrapper}>
            <p className={` text text_type_main-medium`}>Готовы:</p>
            <ul className={feedNumbresStyles.ready_list}>
              {doneArray.map((el, index) => (
                <li
                  key={index}
                  className={`${feedNumbresStyles.ready_digits} text text_type_digits-default mt-2`}
                >
                  <p>{el.number}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              className={`${feedNumbresStyles.pending} text text_type_main-medium`}
            >
              В работе:
            </p>
            <ul className={feedNumbresStyles.ready_list}>
              {pendingArray.map((el, index) => (
                <li key={index}>
                  <p className="text text_type_digits-default mt-2">
                    {el.number}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p className="text text_type_main-medium mt-15">
            Выполнено за всё время:
          </p>
          <p
            className={`${feedNumbresStyles.total_digits} text text_type_digits-large`}
          >
            {total}
          </p>
          <p className="text text_type_main-medium mt-15">
            Выполнено за сегодня:
          </p>
          <p
            className={`${feedNumbresStyles.total_digits} text text_type_digits-large`}
          >
            {totalToday}
          </p>
        </div>
      </div>
    </>
  );
}
