import Modal from "react-modal";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
// import RegistrationForm from '../RegistrationForm/RegistrationForm';
import s from "./Modal.Module.css";

Modal.setAppElement("#root");
const ModalComponent = ({ isOpen, closeModal }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="ragister"
        className={s.modalCon}
        overlayClassName={s.overlay}
      >
        <button className={s.closeBtn} onClick={closeModal}>
          🙅‍♀️
        </button>
        <h2>Реєстрація</h2>
        <RegistrationForm />
      </Modal>
    </>
  );
};

export default ModalComponent;
