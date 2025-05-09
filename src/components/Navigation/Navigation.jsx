import { NavLink } from "react-router-dom";
import s from './Navigation.module.css'
import clsx from "clsx";
const Navigation = () => {
  const isActive = ({isActive}) =>{
    return clsx(s.home, isActive && s.active )
  }
  return (
    <>
      <nav className={s.nav}>
        <NavLink className={isActive} to={'/'}>Home</NavLink>
     
      </nav>
    </>
  );
};

export default Navigation;