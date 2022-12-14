import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import userCabinetStyles from "./UserCabinet.module.css";
import { NavLink } from "react-router-dom";
export function UserCabinet() {
  return (
    <NavLink
      to="/profile"
      className={`${userCabinetStyles.link_wrapper} pt-4 pb-4 pl-5 pr-5`}
      activeClassName={userCabinetStyles.link_wrapper_active}
    >
      <ProfileIcon type="primary" />
      <p className="ml-2 text text_type_main-default">Личный кабинет</p>
    </NavLink>
  );
}
