import Modal from "react-modal";
import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./Modal.module.css";

Modal.setAppElement("#root");

const LoginModal = ({ isOpen, isClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={isClose}
        contentLabel="login"
        className={s.modalCon}
        overlayClassName={s.overlay}
      >
        <button className={s.closeBtn} onClick={isClose}>
          🙅‍♀️
        </button>
        <LoginForm />
      </Modal>
    </>
  );
};

export default LoginModal;
