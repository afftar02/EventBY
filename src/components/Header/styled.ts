import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

import Button from 'components/Button';

export const StyledLink = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  font-size: 24px;
  font-weight: 300;
  cursor: pointer;

  margin-right: 50px;

  &:last-child {
    margin-right: 0;
  }

  display: inline-block;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000000;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &.active {
    text-decoration: underline;
  }

  &.active::after {
    display: none;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  border-bottom: 1px solid #c2c2c2;
`;

export const HeaderNavigation = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoutButton = styled(Button)`
  margin-left: 50px;
  padding: 0 15px;
`;
