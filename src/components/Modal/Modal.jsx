import { createPortal } from "react-dom";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import modalStyles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal");

export default function Modal(props) {
  useEffect(() => {
    function handleEscKeydown(evt) {
      if (evt.key === "Escape") {
        props.closeModal();
      }
    }
    if (props.isOpen) {
      document.addEventListener("keydown", handleEscKeydown);

      return () => {
        document.removeEventListener("keydown", handleEscKeydown);
      };
    }
  }, [props.isOpen]);

  return createPortal(
    <div className={modalStyles.modal}>
      <div className={modalStyles.modal_wrapper}>
        <button
          className={modalStyles.modal_close_button}
          onClick={props.closeModal}
        >
          <CloseIcon type="primary" />
        </button>
        {props.children}
      </div>
      <ModalOverlay closeModal={props.closeModal} />
    </div>,
    modalRoot
  );
}
