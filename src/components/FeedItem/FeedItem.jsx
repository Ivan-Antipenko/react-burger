import feedItemStyles from "./FeedItem.module.css";

export function FeedItem() {
  return (
    <div className={feedItemStyles.feed_item}>
      <div className={feedItemStyles.content_wrapper}>
        <div className={feedItemStyles.tittle_wrapper}>
          <p>Номер заказа</p>
          <p>sss</p>
        </div>
        <p>Название Заказа</p>
        <div></div>
      </div>
    </div>
  );
}
