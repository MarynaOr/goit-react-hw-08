import { Field, Form, Formik } from "formik";
import s from './RegistrationForm.module.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth } from "../../redux/auth/operations";
// import { isLoggedIn } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isLoggedIn } from "../../redux/auth/selectors";
const RegistrationForm = () => {
  const dispatch = useDispatch()
  const login = useSelector(isLoggedIn)
  const navigate = useNavigate()
 const initialValue = {
    name: '',
    email: '',
    password: '',

  }

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(fetchAuth(values))
    options.resetForm()
  }

  useEffect(()=>{
    if(login){
      navigate('/contacts')
    }
  },[login, navigate])



  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValue}>
             <Form className={s.form}>
               <label className={s.label}>
                 <span className={s.span}>Name:</span>
                 <Field type='text' className={s.input} name="name" />
               </label>
               <label className={s.label}>
                 <span className={s.span}>Email:</span>
                 <Field type='email' className={s.input} name="email" />
               </label>
               <label className={s.label}>
                 <span className={s.span}>Password:</span>
                 <Field type='password' className={s.input} name="password" />
                 <button type="submit" className={s.btn}> Відправити</button>
               </label>
             </Form>
           </Formik>
    </>
  );
};

export default RegistrationForm;
