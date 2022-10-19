import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { closeIngredientModal } from "../../services/actions/ingredientsDetails";
import overlayStyles from "./ModalOverlay.module.css";

export function ModalOverlay(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  function closeOverlay() {
    dispatch(closeIngredientModal());
    history.goBack();
  }

  return (
    <div className={overlayStyles.overlay} onClick={closeOverlay}>
      {props.children}
    </div>
  );
}
