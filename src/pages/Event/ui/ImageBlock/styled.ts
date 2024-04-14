import { styled } from 'styled-components';

export const ImageBlockContainer = styled.div`
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  opacity: 0.6;
`;

export const BackgroundImage = styled.img`
  width: 100%;
`;

export const InfoBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  bottom: 30px;
`;

export const Title = styled.span`
  font-size: 30px;
  font-weight: 800;
`;

export const InfoText = styled.span`
  font-size: 22px;
  font-weight: 500;
`;
