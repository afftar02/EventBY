import { useAuth } from 'auth';
import { AuthContextType } from 'auth/types';
import { PATHS } from 'constants/paths';

import CustomLink from 'components/CustomLink';
import Logo from 'components/Logo';

import {
  HeaderContainer,
  HeaderNavigation,
  LogoutButton,
  StyledLink,
} from './styled';

function Header() {
  const { logout } = useAuth() as AuthContextType;

  return (
    <HeaderContainer>
      <CustomLink to={PATHS.home}>
        <Logo />
      </CustomLink>
      <HeaderNavigation>
        <nav>
          <StyledLink to={PATHS.home}>Главная</StyledLink>
          <StyledLink to={PATHS.createEvent}>Создать</StyledLink>
          <StyledLink to={PATHS.profile}>Профиль</StyledLink>
        </nav>
        <LogoutButton onClick={logout}>Выйти</LogoutButton>
      </HeaderNavigation>
    </HeaderContainer>
  );
}

export default Header;
