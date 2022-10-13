import { Link } from "react-router-dom";
import overlayStyles from "./ModalOverlay.module.css";

export function ModalOverlay(props) {
  return (
    <Link to="/">
      <div className={overlayStyles.overlay} onClick={props.closeModal}>
        {props.children}
      </div>
    </Link>
  );
}
