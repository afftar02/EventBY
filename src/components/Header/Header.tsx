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
          <StyledLink to={PATHS.home}>Главная</StyledLink>
          <StyledLink to={PATHS.createEvent}>Создать</StyledLink>
          <StyledLink to={PATHS.profile}>Профиль</StyledLink>
        </nav>
        <LogoutButton>Выйти</LogoutButton>
      </HeaderNavigation>
    </HeaderContainer>
  );
}

export default Header;
