import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
const LoginForm = () => {
  return (
    <>
      <Formik>
        <Form className={s.form}>
          {/* <label className={s.label}>
            <span className={s.span}>Name:</span>
            <Field className={s.input} name="name" />
          </label> */}
          <label className={s.label}>
            <span className={s.span}>Email:</span>
            <Field className={s.input} name="email" />
          </label>
          <label className={s.label}>
            <span className={s.span}>Password:</span>
            <Field className={s.input} name="password" />
            <button className={s.btn}> Відправити</button>
          </label>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
