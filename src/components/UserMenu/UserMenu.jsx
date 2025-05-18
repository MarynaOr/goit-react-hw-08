import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { cleanContacts } from "../../redux/contacts/slice";
// import { cleanContacts } from "../../redux/auth/slice";
import s from './UserMenu.module.css'
const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
 
  // const handleLogout = () => {
  //   dispatch(fetchLogout());
  //   dispatch(cleanContacts())
  // };

  const handleLogout = () => {
 dispatch(fetchLogout());
  // dispatch(cleanContacts());
};

  return (
    <>
      <div className={s.con}>
        <p className={s.hello}>Вітаю {user.email}</p>
        <button className={s.btn} onClick={handleLogout}>Вихід</button>
      </div>
    </>
  );
};

export default UserMenu;
