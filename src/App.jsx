import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchContacts } from "./redux/contacts/operations";
import { useEffect } from "react";
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
import {
  isLoggedIn,
  selectIsRefreshing,
  selectToken,
} from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);
  const login = useSelector(isLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      setAuthHeader(token);
    }
  }, [token]);

  useEffect(() => {
    if (login) {
      dispatch(fetchContacts());
    }
  }, [dispatch, login]);

  return isRefreshing ? (
    <div>Завантаження...</div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactList />
            </PrivateRoute>
          }
        />
        <Route path="/logout" element={<UserMenu />} />
      </Route>
      <Route path="/register" element={<RegistrationPage />} />

      <Route
        path="/login"
        element={
          <RestrictedRout component={<LoginPage />} redirectTo="/contacts" />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
