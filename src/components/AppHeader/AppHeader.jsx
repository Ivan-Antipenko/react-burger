import headerStyles from "./AppHeader.module.css";

import {
  BurgerIcon,
  Logo,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header className={`${headerStyles.header} p-4 mt-10`}>
      <Content />
    </header>
  );
}

function Content() {
  return (
    <div className={headerStyles.header_сontent}>
      <NavBar />
      <div className={headerStyles.header_logo_wrapper}>
        <Logo />
      </div>
      <UserCabinet />
    </div>
  );
}

function NavBar() {
  return (
    <nav>
      <ul className={headerStyles.nav_list}>
        <li>
          <div className={`${headerStyles.link_wrapper} pt-4 pb-4 pl-5 pr-5`}>
            <BurgerIcon type="primary" />
            <a className="ml-2 text text_type_main-default" href="#">
              Конструктор
            </a>
          </div>
        </li>
        <li>
          <div
            className={`${headerStyles.link_wrapper} pt-4 pb-4 pl-5 pr-5 ml-2`}
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

function UserCabinet() {
  return (
    <div className={`${headerStyles.link_wrapper} pt-4 pb-4 pl-5 pr-5`}>
      <ProfileIcon type="primary" />
      <a className="ml-2 text text_type_main-default" href="#">
        Личный кабинет
      </a>
    </div>
  );
}

export default AppHeader;
