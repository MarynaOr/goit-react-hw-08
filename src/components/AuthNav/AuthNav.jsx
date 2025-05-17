import { NavLink } from "react-router-dom";
import s from './AuthNav.module.css'
const AuthNav = () => {
 
  return (
    <>

    {/* <NavLink  to='/register'> <RegistrationPage/> </NavLink>
    <NavLink to='/login'> <LoginPage/> </NavLink> */}
<NavLink className={s.auth} to='/login'>Вхід</NavLink>
<NavLink className={s.auth} to='/register'>Реєстрація</NavLink>

   
    </>
  );
};

export default AuthNav;