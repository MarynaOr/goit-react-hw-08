import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../../redux/auth/selectors";
const Navigation = () => {
  const classActive = ({ isActive }) => {
    return clsx(s.home, isActive && s.active);
  };
  const login = useSelector(isLoggedIn);
  return (
    <>
      <nav className={s.nav}>
        <NavLink className={classActive} to={"/"}>
          Home
        </NavLink>
        {login && (
          <NavLink className={classActive} to={"/contacts"}>
            Контакти
          </NavLink>
        )}
      </nav>
    </>
  );
};

export default Navigation;
