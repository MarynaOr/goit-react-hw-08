import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.con}>
        <p className={s.text}>{name}</p>
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
