import Header from 'components/Header';

import ImageBlock from './ui/ImageBlock';

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
    </>
  );
}

export default Event;
