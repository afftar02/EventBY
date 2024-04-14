import { PATHS } from 'constants/paths';

import {
  BackgroundImage,
  ImageBlockContainer,
  ImageContainer,
  InfoBlock,
  InfoText,
  StyledReturnButton,
  Title,
} from './styled';
import { ImageBlockProps } from './types';

function ImageBlock({ image, title, date, location }: ImageBlockProps) {
  return (
    <ImageBlockContainer>
      <StyledReturnButton link={PATHS.home} />
      <ImageContainer>
        <BackgroundImage src={image ?? '/images/no-event.jpg'} alt={'Img'} />
      </ImageContainer>
      <InfoBlock>
        <Title>{title}</Title>
        <InfoText>
          {date} • {location}
        </InfoText>
      </InfoBlock>
    </ImageBlockContainer>
  );
}

export default ImageBlock;
