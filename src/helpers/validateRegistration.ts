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
    errors.name = 'Требуется имя';
  }

  if (!values.surname) {
    errors.surname = 'Требуется фамилия';
  }

  if (!values.location) {
    errors.location = 'Требуется местоположение';
  }

  if (!values.occupation) {
    errors.occupation = 'Требуется профессия';
  }

  if (!values.gender) {
    errors.gender = 'Требуется пол';
  }

  const loginErrors = validateLogin(values);

  return { ...errors, ...loginErrors };
};
