import { PATHS } from 'constants/paths';

import AuthForm from 'components/AuthForm';

import { AuthorizationContainer, LogoContainer } from './styled';

function Authorization() {
  return (
    <AuthorizationContainer>
      <LogoContainer>
        <img src={'images/locals.svg'} alt={'logo'} />
      </LogoContainer>
      <AuthForm
        hint={"Don't have an account yet?"}
        underlinedHint={'Sign Up'}
        hintLink={PATHS.signUp}
      />
    </AuthorizationContainer>
  );
}

export default Authorization;
