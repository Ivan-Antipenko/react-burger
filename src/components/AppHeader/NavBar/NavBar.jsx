import {
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import navBarStyles from "./NavBar.module.css";

export function NavBar() {
  return (
    <nav>
      <ul className={navBarStyles.nav_list}>
        <li>
          <NavLink
            className={`${navBarStyles.link_wrapper} pt-4 pb-4 pl-5 pr-5 ml-2 text text_type_main-default`}
            to="/"
            activeClassName={navBarStyles.link_wrapper_active}
            exact
          >
            <BurgerIcon type="primary" />
            <p className="ml-2 text text_type_main-default">Конструктор</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${navBarStyles.link_wrapper} pt-4 pb-4 pl-5 pr-5 ml-2`}
            to={{ pathname: `` }}
          >
            <ListIcon type="primary" />

            <p className="ml-2 text text_type_main-default">Лента заказов</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
