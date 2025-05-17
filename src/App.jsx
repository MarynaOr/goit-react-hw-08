import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchContacts } from "./redux/contacts/operations";
import { useEffect } from "react";
import AppBar from "./components/AppBar/AppBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./Layout";
import RegistrationPage from "../src/pages/RegistrationPage/RegistrationPage";
import ContactList from "./components/ContactList/ContactList";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserMenu from "./components/UserMenu/UserMenu";
import { setAuthHeader } from "./redux/auth/operations";
import RestrictedRout from "./components/RestrictedRoute/RestrictedRout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { selectIsRefreshing } from "./redux/auth/selectors";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthHeader(token);
      dispatch(fetchContacts());
    }
  }, [dispatch]);

  return isRefreshing ? null : (
     <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>} />
          {/* <Route index element={<RestrictedRout component={<HomePage/>} redirectTo="/" />} /> */}
          <Route path="contacts" element={<PrivateRoute> <ContactList /> </PrivateRoute>} />
          <Route path="/logout" element={<UserMenu />} />
        </Route>
        <Route path="/register" element={<RegistrationPage />} />

        <Route path="/login" element={<RestrictedRout component={<LoginPage />} redirectTo="/contacts" />} />
      </Routes>
      
  )
  
  
  
  // (
  //   <>
     
  //   </>
  // );
}

export default App;
