import { createPortal } from "react-dom";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeIngredientModal } from "../../services/actions/ingredientsDetails";
import { closeOrderModal } from "../../services/actions/orderDetails";

const modalRoot = document.querySelector("#modal");

export default function Modal(props) {
  const dispatch = useDispatch();

  function closeModals() {
    dispatch(closeIngredientModal());
    dispatch(closeOrderModal());
  }

  const modalIngredientState = useSelector(
    (store) => store.ingredientDetails.isModalOpen
  );

  const modalOrderState = useSelector(
    (store) => store.orderDetails.isModalOpen
  );

  useEffect(() => {
    function handleEscKeydown(evt) {
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
      <ModalOverlay closeModal={closeModals} />
    </div>,
    modalRoot
  );
}
