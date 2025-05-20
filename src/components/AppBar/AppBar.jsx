import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import s from "./AppBar.module.css";
import { isLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const login = useSelector(isLoggedIn);
  return (
    <>
      <header className={s.header}>
        <Navigation />
        {login ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
};

export default AppBar;
