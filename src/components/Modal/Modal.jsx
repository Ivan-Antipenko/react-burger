import { createPortal } from "react-dom";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { useEffect } from "react";

import modalStyles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal");

export default function Modal(props) {
  useEffect(() => {
    function handleEscKeydown(evt) {
      if (evt.key === "Escape") {
        props.closeModal();
      }
    }
    if (props.openModal) {
      document.addEventListener("keydown", handleEscKeydown);

      return () => {
        document.removeEventListener("keydown", handleEscKeydown);
      };
    }
  }, [props.openModal]);

  return createPortal(
    <>
      <div className={modalStyles.modal}>
        {props.children}
        <ModalOverlay closeModal={props.closeModal} />
      </div>
    </>,
    modalRoot
  );
}
