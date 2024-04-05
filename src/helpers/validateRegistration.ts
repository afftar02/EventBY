import * as Formik from 'formik';
import { validateLogin } from 'helpers/validateLogin';

interface Values {
  name: string;
  surname: string;
  email: string;
  password: string;
  location: string;
}

export const validateRegistration = (values: Values) => {
  const errors: Formik.FormikErrors<Values> = {};

  if (!values.name) {
    errors.name = 'Name required';
  }

  if (!values.surname) {
    errors.surname = 'Surname required';
  }

  if (!values.location) {
    errors.location = 'Location required';
  }

  const loginErrors = validateLogin(values);

  return { ...errors, ...loginErrors };
};
