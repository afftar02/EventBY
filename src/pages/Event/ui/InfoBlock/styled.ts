import { styled } from 'styled-components';

import Button from 'components/Button';

export const FieldsContainer = styled.div`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const VerticalFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FieldTitle = styled.span`
  font-weight: 700;
  font-size: 22px;
`;

export const FieldText = styled.span`
  font-size: 20px;
`;

export const JoinButton = styled(Button)`
  position: absolute;
  right: 50px;
  gap: 5px;
  padding: 0 10px;
`;
