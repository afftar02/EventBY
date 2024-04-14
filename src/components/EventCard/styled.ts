import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const CardContainer = styled.div`
  width: 300px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  overflow: hidden;
  border-radius: 20px;
`;

export const InfoContainer = styled.div`
  margin-top: 10px;
`;

export const TitleText = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

export const LocationTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

export const InfoText = styled.span`
  font-weight: 500;
`;

export const EditContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 99px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 5px;
  top: 5px;
  transition: all 0.2s ease-in-out;
  background-color: rgba(255, 255, 255, 0.8);

  &:hover {
    background-color: #ffff95;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
`;
