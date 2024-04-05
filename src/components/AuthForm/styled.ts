import { styled } from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 40px;
`;

export const StyledText = styled.span`
  font-size: 18px;
  font-style: italic;
  font-weight: 300;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
`;

export const UnderlinedText = styled.span`
  font-size: 18px;
  font-style: italic;
  font-weight: 300;
  text-decoration-line: underline;
  opacity: 1;
  color: black;
  transition: opacity 0.2s ease-in-out;

  margin-left: 4px;

  &:hover {
    opacity: 0.6;
  }
`;
