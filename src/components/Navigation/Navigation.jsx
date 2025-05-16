import { NavLink } from "react-router-dom";
import s from './Navigation.module.css'
import clsx from "clsx";
const Navigation = () => {
  const classActive = ({isActive}) =>{
    return clsx(s.home, isActive && s.active )
  }
  return (
    <>
      <nav className={s.nav}>
        <NavLink className={classActive} to={'/'}>Home</NavLink>
        <NavLink className={classActive} to={'/contacts'} >Контакти</NavLink>
        <NavLink className={classActive} to={'/login'} >Вхід</NavLink>
        <NavLink className={classActive} to={'/register'} >Реєстрація</NavLink>
        {/* <NavLink className={classActive} to={'/logout'} >Вихід</NavLink> */}
      </nav>
    </>
  );
};

export default Navigation;