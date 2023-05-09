import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

//Handling form validation
const userSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Email is not valid').required('Email is required'),
  password: Yup.string()
    .min(7, 'Password is too short')
    .required('Password is required'),
});

const userSignup = () => {
  const initialValues = {name: '', email: '', password: ''};

  const handleSubmit = (values, {setSubmitting}) => {
    // Handle form submission here
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleSubmit}>
      {({isSubmitting}) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />

          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" />

          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default userSignup;
