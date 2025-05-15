import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../redux/auth/operations";
import { isLoggedIn } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const LoginForm = () => {
const dispatch =useDispatch()
const login = useSelector(isLoggedIn)
const navigate = useNavigate()
const initialValues = {
  email: '',
  password: '',
}

const handleSubmit = (values, options) =>{
  console.log(values);
  dispatch(fetchLogin(values))
  options.resetForm()
  
}
useEffect(()=>{
  if(login){
    navigate('/contacts')
  }
},[login, navigate])

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          
          <label className={s.label}>
            <span className={s.span}>Email:</span>
            <Field className={s.input} name="email" />
          </label>
          <label className={s.label}>
            <span className={s.span}>Password:</span>
            <Field type="password" className={s.input} name="password" />
            <button type="submit" className={s.btn}> Відправити</button>
          </label>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
