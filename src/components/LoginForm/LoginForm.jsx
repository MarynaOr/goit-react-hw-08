import { Field, Form, Formik } from "formik";

const LoginForm = () => {
  return (
    <>
          <Formik>
              <Form>
                <label>
                  <span>Name:</span>
                  <Field name='name' />
                </label>
                <label>
                  <span>Email:</span>
                  <Field name='email' />
                </label>
                <label>
                  <span>Password:</span>
                  <Field name='password' />
                </label>
              </Form>
            </Formik>
    </>
  );
};

export default LoginForm;