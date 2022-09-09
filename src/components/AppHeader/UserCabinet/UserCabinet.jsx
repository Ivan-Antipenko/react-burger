import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import userCabinetStyles from "./UserCabinet.module.css";

export function UserCabinet() {
  return (
    <div className={`${userCabinetStyles.link_wrapper} pt-4 pb-4 pl-5 pr-5`}>
      <ProfileIcon type="primary" />
      <a className="ml-2 text text_type_main-default" href="#">
        Личный кабинет
      </a>
    </div>
  );
}
