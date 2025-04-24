import { useDispatch } from "react-redux";
// import { deleteContact, editContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";
import {deleteContact} from '../../redux/contactsOps'

const Contact = ({ id, username, phone }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.con}>
        <p className={s.text}>{username}</p>
        <p className={s.text}>
          <a href={`tel:${phone}`} className={s.link}>
            {" "}
            {phone}{" "}
          </a>
        </p>
      </div>

      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Видалити
      </button>
    </>
  );
};

export default Contact;
