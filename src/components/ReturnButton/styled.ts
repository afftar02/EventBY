import { styled } from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 99px;
  border: 1px solid #5e5e5e;
  height: 40px;
  width: 40px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  background-color: rgba(255, 255, 255, 0.6);

  &:hover {
    background-color: #ffff95;
  }
`;
