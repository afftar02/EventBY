import {
  FieldContainer,
  FieldsContainer,
  FieldText,
  FieldTitle,
  JoinButton,
  VerticalFieldContainer,
} from './styled';
import { InfoBlockProps } from './types';

function InfoBlock({
  description,
  participantsCount,
  date,
  startTime,
  endTime,
  location,
  price,
}: InfoBlockProps) {
  return (
    <FieldsContainer>
      <VerticalFieldContainer>
        <FieldTitle>О мероприятии</FieldTitle>
        <FieldText>{description}</FieldText>
      </VerticalFieldContainer>
      <FieldContainer>
        <FieldTitle>Участников:</FieldTitle>
        <FieldText>{participantsCount}</FieldText>
      </FieldContainer>
      <FieldContainer>
        <img src={'/images/calendar.svg'} alt={'Date'} width={25} />
        <FieldText>
          {date} • {startTime} - {endTime}
        </FieldText>
      </FieldContainer>
      <FieldContainer>
        <img src={'/images/location.svg'} alt={'Location'} />
        <VerticalFieldContainer>
          <FieldText>{location}</FieldText>
          <span>Точное место можно узнать после присоединения</span>
        </VerticalFieldContainer>
      </FieldContainer>
      <FieldContainer>
        <img src={'/images/wallet.svg'} alt={'Price'} />
        {price ? (
          <>
            <FieldTitle>Стоимость:</FieldTitle>
            <FieldText>{price} р</FieldText>
          </>
        ) : (
          <FieldText>Бесплатное участие</FieldText>
        )}
      </FieldContainer>
      <JoinButton>
        <img src={'/images/plus.svg'} alt={'Add'} />
        Присоединиться
      </JoinButton>
    </FieldsContainer>
  );
}

export default InfoBlock;
