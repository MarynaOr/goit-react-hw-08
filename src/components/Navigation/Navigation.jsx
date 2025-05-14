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
        <NavLink className={classActive} to={'/contacts'} >Phone Book</NavLink>
        <NavLink className={classActive} to={'/login'} >Login</NavLink>
        <NavLink className={classActive} to={'/register'} >Register</NavLink>

      </nav>
    </>
  );
};

export default Navigation;