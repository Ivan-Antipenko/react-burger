import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";

import profileStyles from "./Profile.module.css";

export function Profile() {
  // const name = useSelector((store) => store.register.user.name);
  // const email = useSelector((store) => store.register.user.email);
  // const pass = useSelector((store) => store.register.user.pass);
  return (
    <section className={profileStyles.content_box}>
      <div className={profileStyles.menu_wrapper}>
        <ul className={profileStyles.menu_list}>
          <li>
            <div className={profileStyles.menu_button}>
              <p className="text text_type_main-medium">Профиль</p>
            </div>
          </li>
          <li>
            <div className={profileStyles.menu_button}>
              <p className="text text_type_main-medium">История заказов</p>
            </div>
          </li>
          <li>
            <div className={profileStyles.menu_button}>
              <p className="text text_type_main-medium">Выход</p>
            </div>
          </li>
        </ul>
        <p className="text text_type_main-small text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>

      <div className="ml-15">
        <div>
          <Input placeholder="Имя" />
        </div>
        <div className="mt-6">
          <Input placeholder="Логин" />
        </div>
        <div className="mt-6">
          <Input placeholder="Пароль" />
        </div>
      </div>
    </section>
  );
}
