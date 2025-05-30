import { useSelector } from "react-redux";
import { isLoggedIn } from "../../redux/auth/selectors";
import toast from "react-hot-toast/headless";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const login = useSelector(isLoggedIn);

  return login ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
