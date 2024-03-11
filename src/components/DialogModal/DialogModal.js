import Styles from "./dialogModal.module.css";

function DialogModal(props) {
  const onClickHandler = () => {
    props.setModalState({ isOpen: false, message: "" });
  };
  return (
    <div className={Styles.modal}>
      <div className={Styles.modalContent}>
        <p>{props.modalState.message}</p>
        <button onClick={onClickHandler}>Ок</button>
      </div>
    </div>
  );
}

export default DialogModal;
