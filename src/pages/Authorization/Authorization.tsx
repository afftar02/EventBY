import { PATHS } from 'constants/paths';

import AuthForm from 'components/AuthForm';
import Logo from 'components/Logo';

import { AuthorizationContainer } from './styled';

function Authorization() {
  return (
    <AuthorizationContainer>
      <Logo />
      <AuthForm
        hint={'У вас еще нет учетной записи?'}
        underlinedHint={'Зарегистрироваться'}
        hintLink={PATHS.signUp}
      />
    </AuthorizationContainer>
  );
}

export default Authorization;
