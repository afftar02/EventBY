import { memo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'auth/Auth';
import { AuthContextType } from 'auth/types';
import { AxiosError } from 'axios';
import { PATHS } from 'constants/paths';
import { useFormik } from 'formik';
import { validateLogin } from 'helpers/validateLogin';
import { validateRegistration } from 'helpers/validateRegistration';

import Input from 'components/Input';
import PasswordInput from 'components/PasswordInput';

import {
  FormContainer,
  StyledForm,
  StyledText,
  SubmitButton,
  TextContainer,
  UnderlinedText,
} from './styled';
import { AuthFormProps } from './types';

function AuthForm({
  isSignUp = false,
  hint,
  underlinedHint,
  hintLink,
}: AuthFormProps) {
  const navigate = useNavigate();
  const { register, login } = useAuth() as AuthContextType;

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      location: '',
      birthDate: '',
    },
    validate: (values) =>
      isSignUp ? validateRegistration(values) : validateLogin(values),
    validateOnChange: false,
    onSubmit: () => {
      isSignUp ? handleRegister() : handleLogin();
    },
  });

  const handleRegister = useCallback(async () => {
    try {
      await register(formik.values);
      navigate(PATHS.home);
    } catch (err) {
      const axiosError = err as AxiosError;
      const { message } = axiosError.response?.data as { message: string };

      alert(message);
    }
  }, [formik, navigate, register]);

  const handleLogin = useCallback(async () => {
    try {
      await login(formik.values);
      navigate('/');
    } catch (err) {
      formik.values.email = '';
      formik.values.password = '';
      formik.setFieldError('email', 'Invalid email or password');
      formik.setFieldError('password', 'Invalid email or password');
    }
  }, [formik, login, navigate]);

  return (
    <FormContainer>
      <StyledForm onSubmit={formik.handleSubmit}>
        {isSignUp && (
          <Input
            placeholder={formik.errors.name ?? 'Name'}
            onChange={formik.handleChange}
            value={formik.values.name}
            onClick={() => formik.setFieldError('name', undefined)}
            name={'name'}
            isError={!!formik.errors.name}
          />
        )}
        {isSignUp && (
          <Input
            placeholder={formik.errors.surname ?? 'Surname'}
            onChange={formik.handleChange}
            value={formik.values.surname}
            onClick={() => formik.setFieldError('surname', undefined)}
            name={'surname'}
            isError={!!formik.errors.surname}
          />
        )}
        {isSignUp && (
          <Input
            placeholder={formik.errors.location ?? 'Location'}
            onChange={formik.handleChange}
            value={formik.values.location}
            onClick={() => formik.setFieldError('location', undefined)}
            name={'location'}
            isError={!!formik.errors.location}
          />
        )}
        {isSignUp && (
          <Input
            placeholder={formik.errors.birthDate ?? 'Date of birth'}
            onChange={formik.handleChange}
            value={formik.values.birthDate}
            onClick={() => formik.setFieldError('birthDate', undefined)}
            name={'birthDate'}
            isError={!!formik.errors.birthDate}
          />
        )}
        <Input
          placeholder={formik.errors.email ?? 'Email'}
          onChange={formik.handleChange}
          value={formik.values.email}
          onClick={() => formik.setFieldError('email', undefined)}
          name={'email'}
          isError={!!formik.errors.email}
        />
        <PasswordInput
          placeholder={formik.errors.password ?? 'Enter strong password'}
          onChange={formik.handleChange}
          value={formik.values.password}
          onClick={() => formik.setFieldError('password', undefined)}
          isError={!!formik.errors.password}
        />
        <SubmitButton type={'submit'}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </SubmitButton>
      </StyledForm>
      <TextContainer>
        <StyledText>{hint}</StyledText>
        {hintLink && (
          <Link to={hintLink}>
            <UnderlinedText>{underlinedHint}</UnderlinedText>
          </Link>
        )}
      </TextContainer>
    </FormContainer>
  );
}

export default memo(AuthForm);
