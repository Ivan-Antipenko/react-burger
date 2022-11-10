import overlayStyles from "./ModalOverlay.module.css";

export function ModalOverlay(props) {
  return (
    <div className={overlayStyles.overlay} onClick={props.closeModal}>
      {props.children}
    </div>
  );
}
