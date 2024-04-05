import { PATHS } from 'constants/paths';

import AuthForm from 'components/AuthForm';

import { LogoContainer, RegistrationContainer } from './styled';

function Registration() {
  return (
    <RegistrationContainer>
      <LogoContainer>
        <img src={'images/locals.svg'} alt={'logo'} />
      </LogoContainer>
      <AuthForm
        hint={'Already have an account?'}
        underlinedHint={'Sign In'}
        hintLink={PATHS.signIn}
        isSignUp={true}
      />
    </RegistrationContainer>
  );
}

export default Registration;
