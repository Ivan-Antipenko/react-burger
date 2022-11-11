import { createPortal } from "react-dom";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { ReactNode, useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./Modal.module.css";
import {
  IComponentProps,
  useDispatch,
  useSelector,
} from "../../services/types";
import { closeIngredientModal } from "../../services/actions/ingredientsDetails";
import { closeOrderModal } from "../../services/actions/orderDetails";
import { useHistory } from "react-router-dom";


export default function Modal(props: IComponentProps) {
  const dispatch = useDispatch();
  const history = useHistory();
  const closeModals = () => {
    dispatch(closeIngredientModal());
    dispatch(closeOrderModal());
    history.goBack();
  };
  const modalIngredientState = useSelector(
    (store) => store.ingredientDetails.isModalOpen
  );

  const modalOrderState = useSelector(
    (store) => store.orderDetails.isModalOpen
  );

  useEffect(() => {
    function handleEscKeydown(evt: KeyboardEvent) {
      if (evt.key === "Escape") {
        closeModals();
      }
    }
    if (modalIngredientState || modalOrderState) {
      document.addEventListener("keydown", handleEscKeydown);

      return () => {
        document.removeEventListener("keydown", handleEscKeydown);
      };
    }
  }, []);

  return createPortal(
    <div className={modalStyles.modal}>
      <div className={modalStyles.modal_wrapper}>
        <button
          className={modalStyles.modal_close_button}
          onClick={closeModals}
        >
          <CloseIcon type="primary" />
        </button>
        {props.children}
      </div>
      <ModalOverlay />
    </div>,
    document.getElementById('modal')!
  );
}
