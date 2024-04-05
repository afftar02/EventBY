import { PATHS } from 'constants/paths';

import AuthForm from 'components/AuthForm';
import Logo from 'components/Logo';

import { AuthorizationContainer } from './styled';

function Authorization() {
  return (
    <AuthorizationContainer>
      <Logo />
      <AuthForm
        hint={"Don't have an account yet?"}
        underlinedHint={'Sign Up'}
        hintLink={PATHS.signUp}
      />
    </AuthorizationContainer>
  );
}

export default Authorization;
