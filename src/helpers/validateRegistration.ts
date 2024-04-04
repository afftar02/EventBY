import * as Formik from 'formik';
import { validateLogin } from 'helpers/validateLogin';

interface Values {
  name: string;
  surname: string;
  email: string;
  password: string;
  location: string;
  birthDate: string;
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

  if (!values.birthDate) {
    errors.birthDate = 'Date of birth required';
  }

  const loginErrors = validateLogin(values);

  return { ...errors, ...loginErrors };
};
