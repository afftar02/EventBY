import EventCard from 'components/EventCard';

import { EventsContainer } from '../styled';

function AllEvents() {
  return (
    <EventsContainer>
      <EventCard
        title={'Бильярд'}
        date={'Апрель, 15'}
        image={'/images/dog.jpeg'}
        location={'Минск'}
        participantsCount={8}
      />
      <EventCard
        title={'Бильярд'}
        date={'Апрель, 15'}
        location={'Минск'}
        participantsCount={8}
      />
      <EventCard
        title={'Бильярд'}
        date={'Апрель, 15'}
        image={'/images/dog.jpeg'}
        location={'Минск'}
        participantsCount={8}
      />
      <EventCard
        title={'Бильярд'}
        date={'Апрель, 15'}
        location={'Минск'}
        participantsCount={8}
      />
      <EventCard
        title={'Бильярд'}
        date={'Апрель, 15'}
        image={'/images/dog.jpeg'}
        location={'Минск'}
        participantsCount={8}
      />
      <EventCard
        title={'Бильярд'}
        date={'Апрель, 15'}
        location={'Минск'}
        participantsCount={8}
      />
      <EventCard
        title={'Бильярд'}
        date={'Апрель, 15'}
        image={'/images/dog.jpeg'}
        location={'Минск'}
        participantsCount={8}
      />
    </EventsContainer>
  );
}

export default AllEvents;
