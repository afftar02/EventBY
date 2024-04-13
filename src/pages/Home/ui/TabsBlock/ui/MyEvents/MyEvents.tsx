import EventCard from 'components/EventCard';

import { EventsContainer } from '../styled';

function MyEvents() {
  return (
    <EventsContainer>
      <EventCard
        title={'Бильярд'}
        date={'Апрель, 15'}
        image={'/images/dog.jpeg'}
        location={'Минск'}
        participantsCount={8}
        showEdit={true}
      />
      <EventCard
        title={'Бильярд'}
        date={'Апрель, 15'}
        location={'Минск'}
        participantsCount={8}
        showEdit={true}
      />
      <EventCard
        title={'Бильярд'}
        date={'Апрель, 15'}
        image={'/images/dog.jpeg'}
        location={'Минск'}
        participantsCount={8}
        showEdit={true}
      />
    </EventsContainer>
  );
}

export default MyEvents;
