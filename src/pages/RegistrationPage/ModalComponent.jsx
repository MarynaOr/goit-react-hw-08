import Modal from 'react-modal'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
// import RegistrationForm from '../RegistrationForm/RegistrationForm';

Modal.setAppElement('#root');
const ModalComponent = ({ isOpen, closeModal  }) => {
  return (
    <>
      <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel='ragister'

      >
        <button onClick={closeModal}>x</button>
        <h2>Реєстрація</h2>
        <RegistrationForm/>
        
      </Modal>
    </>
  );
};

export default ModalComponent;