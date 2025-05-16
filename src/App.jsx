import { useDispatch } from "react-redux";
import "./App.css";
// import ContactList from "./components/ContactList/ContactList";
import { fetchContacts } from "./redux/contacts/operations";
import { useEffect } from "react";
import AppBar from "./components/AppBar/AppBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./Layout";
import RegistrationPage from "../src/pages/RegistrationPage/RegistrationPage";
// import LoginPage from "./pages/LoginPage/LoginPage";
import ContactList from "./components/ContactList/ContactList";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserMenu from "./components/UserMenu/UserMenu";
import { setAuthHeader } from "./redux/auth/operations";
// import { setAuthHeader } from "./redux/auth/operations";
// import { setAuthHeader } from './redux/auth/operations';

function App() {

 useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthHeader(token); // 👈 критично важливо
    }
  }, []);

  // const token = localStorage.getItem("token");
  // if (token) {
  //   setAuthHeader(token); // тепер усі наступні запити будуть з токеном
  // }
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactList />} />
          <Route path="/logout" element={<UserMenu />} />
        </Route>

        <Route path="/register" element={<RegistrationPage />} />
        {/* <Route path="/register" element={<RegistrationPage />} /> */}

        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* <AppBar/> */}
      {/* <ContactList /> */}
    </>
  );
}

export default App;
