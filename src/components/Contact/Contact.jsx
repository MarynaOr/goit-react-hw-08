import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";


const Contact = ({ name, number }) => {
const dispatch = useDispatch()
const deleteContact = useSelector((state) => state.filter.item)


  return (
    <>
      <div>
        <span> {name} </span>
        <a href={`tel:${number}`}> {number} </a>
        <button type="button" onClick={() => dispatch(deleteContact) }>Delete</button>



      </div>
    </>
  );
};

export default Contact;
