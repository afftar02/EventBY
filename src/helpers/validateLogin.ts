import * as Formik from 'formik';

interface Values {
  email: string;
  password: string;
}

const mailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validateLogin = (values: Values) => {
  const errors: Formik.FormikErrors<Values> = {};

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!mailRegex.test(values.email)) {
    errors.email = 'Invalid email address';
    values.email = '';
  }

  if (!values.password) {
    errors.password = 'Password required';
  } else if (values.password.length < 4 || values.password.length > 16) {
    errors.password = 'Password length must be from 4 to 16 characters';
    values.password = '';
  }

  return errors;
};
