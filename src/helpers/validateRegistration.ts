import * as Formik from 'formik';
import { validateLogin } from 'helpers/validateLogin';

interface Values {
  name: string;
  surname: string;
  email: string;
  password: string;
  location: string;
  occupation: string;
  gender: string;
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

  if (!values.occupation) {
    errors.occupation = 'Occupation required';
  }

  if (!values.gender) {
    errors.gender = 'Gender required';
  }

  const loginErrors = validateLogin(values);

  return { ...errors, ...loginErrors };
};
