import {
  BackgroundImage,
  ImageBlockContainer,
  ImageContainer,
  InfoBlock,
  InfoText,
  Title,
} from './styled';
import { ImageBlockProps } from './types';

function ImageBlock({ image, title, date, location }: ImageBlockProps) {
  return (
    <ImageBlockContainer>
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
