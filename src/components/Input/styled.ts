import { styled } from 'styled-components';

export const StyledInput = styled.input<{ $isError?: boolean }>`
  font-size: 24px;
  font-weight: 300;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: solid 2px #d9d9d9;
  width: 100%;
  transition: all 0.1s ease-in-out;

  &::placeholder {
    font-size: 24px;
    font-weight: 300;
  }

  ${(props) =>
    props.$isError &&
    `
    &::placeholder {
      color: red;
    }
    border-color: red;
    color: red;
  `};
`;
