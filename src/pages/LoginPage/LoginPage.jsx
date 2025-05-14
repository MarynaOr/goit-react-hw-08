import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";


const LoginPage = () => {
  const [openModal, setOpenModal] = useState(false)
  const navigate =useNavigate()
  const isOpen = () =>setOpenModal(true)
  const isClose = () =>{
    setOpenModal(false)
    navigate('/')
  }
  useEffect(()=>{
isOpen()
  },[])

  return (
    <>
      <LoginModal isOpen={openModal} isClose={isClose} />
    </>
  );
};

export default LoginPage;