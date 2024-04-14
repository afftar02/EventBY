import { PATHS } from 'constants/paths';

import CustomLink from 'components/CustomLink';

import {
  CardContainer,
  EditContainer,
  ImageContainer,
  InfoContainer,
  InfoText,
  LocationTimeContainer,
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
    <CustomLink to={`${PATHS.event}/1`}>
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
    </CustomLink>
  );
}

export default EventCard;
