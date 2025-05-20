import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
const AuthNav = () => {
  return (
    <>
      <NavLink className={s.auth} to="/login">
        Вхід
      </NavLink>
      <NavLink className={s.auth} to="/register">
        Реєстрація
      </NavLink>
    </>
  );
};

export default AuthNav;
