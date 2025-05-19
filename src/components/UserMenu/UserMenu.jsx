import { useDispatch, useSelector } from "react-redux";
import { fetchLogout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <div className={s.con}>
        <p className={s.hello}>Вітаю {user.email}</p>
        <button className={s.btn} onClick={() => dispatch(fetchLogout())}>
          Вихід
        </button>
      </div>
    </>
  );
};

export default UserMenu;
