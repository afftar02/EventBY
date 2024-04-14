import { PATHS } from 'constants/paths';

import {
  CardContainer,
  EditContainer,
  ImageContainer,
  InfoContainer,
  InfoText,
  LocationTimeContainer,
  StyledLink,
  TitleText,
} from './styled';
import { EventCardProps } from './types';

function EventCard({
  title,
  location,
  date,
  participantsCount,
  image,
  showEdit,
}: EventCardProps) {
  return (
    <StyledLink to={`${PATHS.event}/1`}>
      <CardContainer>
        <ImageContainer>
          <img src={image ?? '/images/no-image.png'} alt={'Img'} />
        </ImageContainer>
        <InfoContainer>
          <TitleText>{title}</TitleText>
          <LocationTimeContainer>
            <InfoText>{location}</InfoText>
            <InfoText>{date}</InfoText>
          </LocationTimeContainer>
          <InfoText>Человек: {participantsCount}</InfoText>
        </InfoContainer>
        {showEdit && (
          <EditContainer>
            <img src={'/images/pencil.svg'} alt={'Edit'} />
          </EditContainer>
        )}
      </CardContainer>
    </StyledLink>
  );
}

export default EventCard;
