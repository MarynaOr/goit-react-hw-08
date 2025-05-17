import { useSelector } from "react-redux";
import { isLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";

const RestrictedRout = ({ component: Component, redirectTo = '/'}) => {
  const login = useSelector(isLoggedIn)
  
  // if(login) {
  //   return <Navigate to={redirectTo} />
  // }
    // return <LoginPage/>
    return login ? <Navigate to={redirectTo} /> : Component

  };

export default RestrictedRout;