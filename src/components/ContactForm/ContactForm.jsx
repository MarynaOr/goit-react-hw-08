import { ErrorMessage, Field, Form, Formik } from "formik";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
const onlyLaters = /^[A-Za-zА-Яа-яЇїІіЄєҐґ'’\s]+$/;
const phoneValidation = /^\+?\d{9,15}$/;

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Мінімум 3 літери!")
    .max(50, "Максимум 50!")
    .required("Обов'язкове поле!")
    .matches(onlyLaters, "Можна вводити тільки літери!"),

  phone: Yup.string()
    .matches(phoneValidation, "Невірний формат!")
    .required("Обов'язкове поле!"),
});

// const initialValues = {
//   username: "",
//   phone: "",
// };

const ContactForm = () => {
  // const nameFieldId = useId();
  // const phoneFieldId = useId();
  const initialValues = { username: "", phone: "" };
  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    const newContact = {
      // contact: values.contact,
      // isComplited: false,

      username: values.username,
      phone: values.phone,
      id: crypto.randomUUID(),
    };
    dispatch(addContact(newContact));
    options.resetForm();
  };

  return (
    <div>
      <div>
        <Formik 
        validationSchema={validationSchema}
        initialValues={initialValues} 
        onSubmit={onSubmit}>
          {/* {({ onSubmit }) => ( */}
            <Form>
              <div>
                <label htmlFor="nameFieldId">Ім'я</label>
                <Field
                  name="username"
                  type="text"
                  id="nameFieldId"
                  placeholder="Додати новий контакт"
                />
                {/* <ErrorMessage name="username">
  {msg => <span style={{ color: "red", fontSize: "14px" }}>{msg}</span>}
</ErrorMessage> */}
                <ErrorMessage name="username" component="span" />
              </div>
              <div>
                <label htmlFor="phoneFieldId">Номер</label>
                <Field
                  name="phone"
                  type="tel"
                  id="phoneFieldId"
                  placeholder="Додати номер телефона"
                />
                <ErrorMessage name="phone" component="span" />
              </div>

              <button type="submit">Додати контакт</button>
            </Form>
          {/* )} */}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
