import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavBar } from "../NavBar/NavBar";
import { UserCabinet } from "../UserCabinet/UserCabinet";
import contentStyles from "./Content.module.css";

export function Content() {
  return (
    <div className={contentStyles.header_сontent}>
      <NavBar />
      <div className={contentStyles.header_logo_wrapper}>
        <Logo />
      </div>
      <UserCabinet />
    </div>
  );
}
