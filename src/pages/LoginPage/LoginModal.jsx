import Modal from 'react-modal'
import LoginForm from '../../components/LoginForm/LoginForm';


Modal.setAppElement('#root');

const LoginModal = ({ isOpen, isClose }) => {





  return (
    <>
      <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      contentLabel='login'
      >
        <button onClick={isClose}>X</button>
        <LoginForm/>
      </Modal>
    </>
  );
};

export default LoginModal;