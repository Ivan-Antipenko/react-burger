import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import userCabinetStyles from "./UserCabinet.module.css";
import { Link, NavLink } from "react-router-dom";
export function UserCabinet() {
  return (
    <NavLink
      to={{ pathname: `/profile` }}
      className={`${userCabinetStyles.link_wrapper} pt-4 pb-4 pl-5 pr-5`}
    >
      <ProfileIcon type="primary" />
      <p className="ml-2 text text_type_main-default">Личный кабинет</p>
    </NavLink>
  );
}
