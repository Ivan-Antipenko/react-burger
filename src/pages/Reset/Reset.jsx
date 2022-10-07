import {
  Input,
  Button,
  ShowIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import registerStyles from "./Register.module.css";

export function Register() {
  return (
    <section className={registerStyles.content_box}>
      <form className={registerStyles.wrapper}>
        <p className="text text_type_main-medium">Регистрация</p>
        <div className={`${registerStyles.input_wrapper} mt-6`}>
          <Input placeholder="Имя" />
        </div>
        <div className="mt-6">
          <Input placeholder="E-mail" />
        </div>
        <div className="mt-6">
          <Input placeholder="Пароль" />
        </div>
        <div className="mt-6">
          <Button>Зарегистрироваться</Button>
        </div>
        <p className="text text_type_main-small mt-20">
          Уже зарегистрированы? <a>Войти</a>
        </p>
      </form>
    </section>
  );
}
