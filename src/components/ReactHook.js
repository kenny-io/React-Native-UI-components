import {useForm} from 'react-hook-form';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const Submit = (data) => {
    // Handle submit codes here
  };

  return (
    <form onSubmit={handleSubmit(Submit)}>
      /* "handleSubmit" will validate your inputs before invoking "Submit"
      function */
      <label htmlFor="name">Name</label>
      {/* register your input into the hook by invoking the "register" function */}
      <input type="text" {...register('name')} />
      <label htmlFor="email">Email</label>
      {/* include validation with required or other standard HTML validation rules */}
      <input
        type="email"
        {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
      />
      {/* errors will return when field validation fails  */}
      {errors.email && <span>Please enter a valid email address</span>}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        {...register('password', {required: true, minLength: 6})}
      />
      {errors.password && <span>Password must be at least 6 characters</span>}
      <button type="submit">Submit</button>
    </form>
  );
};
export default SignupForm;
