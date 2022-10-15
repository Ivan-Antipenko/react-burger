import { FeedItem } from "../FeedItem/FeedItem";
import feedStyles from "./Feed.module.css";

export function Feed() {
  return (
    <section className={feedStyles.feed_section}>
      <h2>Лента заказов</h2>
      <div className={feedStyles.content_wrapper}>
        <div>
          <FeedItem />
        </div>
      </div>
    </section>
  );
}
