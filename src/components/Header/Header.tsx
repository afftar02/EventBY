import { PATHS } from 'constants/paths';

import Logo from 'components/Logo';

import {
  HeaderContainer,
  HeaderNavigation,
  LogoutButton,
  StyledLink,
} from './styled';

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderNavigation>
        <nav>
          <StyledLink to={PATHS.home}>Home</StyledLink>
          <StyledLink to={PATHS.createEvent}>Create</StyledLink>
          <StyledLink to={PATHS.profile}>Profile</StyledLink>
        </nav>
        <LogoutButton>Log out</LogoutButton>
      </HeaderNavigation>
    </HeaderContainer>
  );
}

export default Header;
