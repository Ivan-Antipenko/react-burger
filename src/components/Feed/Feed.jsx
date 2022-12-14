import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FeedItem } from "../FeedItem/FeedItem";
import { FeedsNumbers } from "../FeedsNumbers/FeedsNumbers";
import feedStyles from "./Feed.module.css";

export function Feed() {
  const orders = useSelector((store) => store.wsReducer.orders);
  const location = useLocation();

  return (
    <section className={feedStyles.feed_section}>
      <h2 className="text text_type_main-large mt-10">Лента заказов</h2>
      <div className={feedStyles.content_wrapper}>
        <div className={`${feedStyles.scroll_box} mr-15`}>
          <ul className={`${feedStyles.content_list}`}>
            {orders.map((order) => (
              <li key={order._id}>
                <Link
                  to={{
                    pathname: `/feed/${order._id}`,
                    state: { background: location },
                  }}
                >
                  <FeedItem order={order} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <FeedsNumbers />
      </div>
    </section>
  );
}
