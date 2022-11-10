import {
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import navBarStyles from "./NavBar.module.css";

export function NavBar() {
  return (
    <nav>
      <ul className={navBarStyles.nav_list}>
        <li>
          <div className={`${navBarStyles.link_wrapper} pt-4 pb-4 pl-5 pr-5`}>
            <BurgerIcon type="primary" />
            <a className="ml-2 text text_type_main-default" href="#">
              Конструктор
            </a>
          </div>
        </li>
        <li>
          <div
            className={`${navBarStyles.link_wrapper} pt-4 pb-4 pl-5 pr-5 ml-2`}
          >
            <ListIcon type="primary" />
            <a className="ml-2 text text_type_main-default" href="#">
              Лента заказов
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
