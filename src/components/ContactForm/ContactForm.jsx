import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { addContacts } from "../../redux/contactsOps";
import { nanoid } from "@reduxjs/toolkit";
const onlyLaters = /^[A-Za-zА-Яа-яЇїІіЄєҐґ'’\s]+$/;
const phoneValidation = /^\+?\d{9,15}$/;

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Мінімум 3 літери!")
    .max(50, "Максимум 50!")
    .required("Обов'язкове поле!")
    .matches(onlyLaters, "Можна вводити тільки літери!"),

  phone: Yup.string()
    .min(9, "Мінімум 3 цифри!")
    .max(50, "Максимум 50!")
    .matches(phoneValidation, "Невірний формат!")
    .required("Обов'язкове поле!"),
});

const ContactForm = () => {
  const initialValues = { username: "", phone: "" };
  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    const newContact = {
      name: values.username,
      phone: values.phone,
      id: nanoid,
    };
    console.log("Відправляємо на сервер:", newContact);
    dispatch(addContacts(newContact));
    options.resetForm();
  };

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form className={s.con}>
          <div className={s.conForm}>
            <label className={s.label} htmlFor="nameFieldId">
              Ім'я
            </label>
            <Field
              className={s.input}
              name="username"
              type="text"
              id="nameFieldId"
              placeholder="Додати новий контакт"
            />

            <ErrorMessage
              className={s.error}
              name="username"
              component="span"
            />
          </div>
          <div className={s.conForm}>
            <label className={s.label} htmlFor="phoneFieldId">
              Номер
            </label>
            <Field
              className={s.input}
              name="phone"
              type="tel"
              id="phoneFieldId"
              placeholder="Додати номер телефона"
            />
            <ErrorMessage className={s.error} name="phone" component="span" />
          </div>

          <button className={s.btn} type="submit">
            Додати контакт
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
