import Contact from "../Contact/Contact";
import ContactForm from "../ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import s from "./ContactList.module.css";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/selectFilteredContacts";
const ContactList = () => {
  // const contacts = useSelector((state) => state.contacts.items);
  // const filter = useSelector((state) => state.filter.filter);
  // console.log(contacts);
const selectContacts = useSelector(selectFilteredContacts)
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchContacts())
},[dispatch])

  // const filterContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <>
      <div className={s.con}>
        <ContactForm />
        <SearchBox />
        <ul className={s.item}>
          {selectContacts.length > 0 ? (
            selectContacts.map(({ id, name, phone }) => (
              <li className={s.list} key={id}>
                <Contact id={id} name={name} phone={phone} />
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
