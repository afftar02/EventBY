import { styled } from 'styled-components';

export const TagContainer = styled.div<{ $selected?: boolean }>`
  border: 1px solid #5e5e5e;
  border-radius: 99px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 75px;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  background-color: ${(props) => (props.$selected ? '#fafa47' : '#ffffe3')};
  font-weight: ${(props) => (props.$selected ? 700 : 400)};

  &:hover {
    background-color: #fafa47;
  }
`;
