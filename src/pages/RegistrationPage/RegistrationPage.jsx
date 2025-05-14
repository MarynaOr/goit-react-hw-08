import { useEffect, useState } from "react";
import ModalComponent from "./ModalComponent";
import { useNavigate } from "react-router-dom";
// import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const navigate = useNavigate()
  const openModal = () => setIsOpenModal(true)
  const closeModal = () => {setIsOpenModal(false)
    navigate('/')
  }
  useEffect(()=>{
    openModal()
  },[])


  return (
    <>
    {/* <button onClick={openModal}>Register</button> */}
    <ModalComponent isOpen={isOpenModal} closeModal={closeModal} />



      {/* <RegistrationForm/> */}
    </>
  );
};

export default RegistrationPage;