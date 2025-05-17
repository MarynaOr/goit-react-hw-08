import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { cleanContacts } from "../../redux/contacts/slice";
// import { cleanContacts } from "../../redux/auth/slice";

const UserMenu = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  // useEffect(()=>{
  //   fetchLogout()
  // })
  const handleLogout = () =>{
    dispatch(fetchLogout())
    // dispatch(cleanContacts())
  }
  return (
    <>
    <div>
      <p>Вітаю {user.email}</p>
      <button onClick={handleLogout}>Вихід</button>

        </div>

    </>
  );
};

export default UserMenu;