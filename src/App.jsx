import { useDispatch } from "react-redux";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import { fetchContacts } from "./redux/contacts/operations";
import { useEffect } from "react";
import AppBar from "./components/AppBar/AppBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <>
    <Routes>

      <Route path="/" element={<Layout/>} >
            <Route index element={<HomePage/>}/>

      </Route>


    </Routes>
  {/* <AppBar/> */}
      {/* <ContactList /> */}
    </>
  );
}

export default App;
