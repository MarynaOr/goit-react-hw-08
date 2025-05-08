import { useDispatch } from "react-redux";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import { fetchContacts } from "./redux/contacts/operations";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ContactList />
    </>
  );
}

export default App;
