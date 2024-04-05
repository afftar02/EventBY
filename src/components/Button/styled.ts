import { styled } from 'styled-components';

export const StyledButton = styled.button`
  height: 40px;
  border-radius: 10px;
  border: 1px solid #5e5e5e;
  cursor: pointer;
  background-color: #ffff95;
  transition: all 0.2s ease-in-out;
  font-size: 16px;

  &:hover {
    background-color: yellow;
  }
`;
