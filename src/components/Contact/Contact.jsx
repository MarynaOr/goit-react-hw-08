import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, username, phone }) => {
  const dispatch = useDispatch();
  // console.log("Пропси в Contact.jsx:", { id, username, phone }); // 🔥

  return (
    <>
      <div>
        <p>
        <span> Ім'я: {username} </span>
      </p>
        <p>
        <span> Номер: {phone} </span>
      </p>
        
        {/* <a href={`tel:${number}`}> {number} </a> */}
        <button type="button" onClick={() => dispatch(deleteContact(id))}>
          Видалити
        </button>
      </div>
    </>
  );
};

export default Contact;
