import { PATHS } from 'constants/paths';

import AuthForm from 'components/AuthForm';
import Logo from 'components/Logo';

import { RegistrationContainer } from './styled';

function Registration() {
  return (
    <RegistrationContainer>
      <Logo />
      <AuthForm
        hint={'Уже есть учетная запись?'}
        underlinedHint={'Авторизоваться'}
        hintLink={PATHS.signIn}
        isSignUp={true}
      />
    </RegistrationContainer>
  );
}

export default Registration;
