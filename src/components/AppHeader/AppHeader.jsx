import headerStyles from "./AppHeader.module.css";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Content } from "./Content/Content";

function AppHeader() {
  return (
    <header className={`${headerStyles.header} p-4 mt-10`}>
      <Content />
    </header>
  );
}

export default AppHeader;
