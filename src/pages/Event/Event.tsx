import Header from 'components/Header';

import ImageBlock from './ui/ImageBlock';
import InfoBlock from './ui/InfoBlock';

function Event() {
  return (
    <>
      <Header />
      <ImageBlock
        title={'Бильярд'}
        date={'Апрель, 15'}
        location={'Минск'}
        image={'/images/dog.jpeg'}
      />
      <InfoBlock
        description={
          'Соберемся поиграть в бильярд и просто хорошо провести время.'
        }
        participantsCount={4}
        date={'Апрель, 15'}
        startTime={'19:30'}
        endTime={'22:00'}
        location={'Минск'}
        price={7.5}
      />
    </>
  );
}

export default Event;
