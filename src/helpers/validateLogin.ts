import * as Formik from 'formik';

interface Values {
  email: string;
  password: string;
}

const mailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validateLogin = (values: Values) => {
  const errors: Formik.FormikErrors<Values> = {};

  if (!values.email) {
    errors.email = 'Email обязателен';
  } else if (!mailRegex.test(values.email)) {
    errors.email = 'Неверный email';
    values.email = '';
  }

  if (!values.password) {
    errors.password = 'Требуется пароль';
  } else if (values.password.length < 4 || values.password.length > 16) {
    errors.password = 'Длина пароля должна составлять от 4 до 16 символов';
    values.password = '';
  }

  return errors;
};
