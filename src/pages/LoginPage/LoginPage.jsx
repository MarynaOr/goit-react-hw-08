import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import s from './LoginPage.module.css'
import LoginModal from "../../components/Modal/LoginModal";

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
    <div className={s.con}>
            <LoginModal isOpen={openModal} isClose={isClose} />

    </div>
    </>
  );
};

export default LoginPage;