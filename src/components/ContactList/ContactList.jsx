import Contact from "../Contact/Contact";
import ContactForm from "../ContactForm/ContactForm";
import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import SearchBox from "../SearchBox/SearchBox";
const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  // console.log("Контакти з Redux:", contacts);
  // console.log("Контакти з Redux у рендері:", contacts);
  return (
    <>
      <div className={s.con}>
        <ContactForm />
        <SearchBox />
        <ul>
          {contacts.length > 0 ? (
            contacts.map(({ id, username, phone }) => (
              <li key={id}>
                <Contact id={id} username={username} phone={phone} />
              </li>
            ))
          ) : (
            <p>Немає контактів</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
