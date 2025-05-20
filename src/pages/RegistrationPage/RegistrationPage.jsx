import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../../components/Modal/ModalRegister";

const RegistrationPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();
  const openModal = () => setIsOpenModal(true);
  const closeModal = () => {
    setIsOpenModal(false);
    navigate("/");
  };
  useEffect(() => {
    openModal();
  }, []);

  return (
    <>
      <ModalComponent isOpen={isOpenModal} closeModal={closeModal} />
    </>
  );
};

export default RegistrationPage;
