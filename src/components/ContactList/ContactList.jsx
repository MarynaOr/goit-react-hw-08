import Contact from "../Contact/Contact";
import ContactForm from "../ContactForm/ContactForm";
import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import SearchBox from "../SearchBox/SearchBox";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <div className={s.con}>
        <ContactForm />
        <SearchBox />
        <ul className={s.item}>
          {contacts.length > 0 ? (
            contacts.map(({ id, name, number }) => (
              <li className={s.list} key={id}>
                <Contact id={id} name={name} number={number} />
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
