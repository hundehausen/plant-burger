import isFuture from 'date-fns/isFuture';
import parseISO from 'date-fns/parseISO';
import { gql } from 'graphql-request';
import { partition } from 'ramda';
import { useMemo } from 'react';

import CustomHead from '../components/CustomHead';
import Event, { IEvent } from '../components/Event';
import { request } from '../lib/datocms';

const EVENT_QUERY = gql`
  {
    allEvents {
      id
      name
      description
      location {
        latitude
        longitude
      }
      startDate
      endDate
    }
  }
`;

const Events = ({ events }: { events: IEvent[] }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [upcomingEvents, pastEvents] = useMemo(
    () => partition((event) => isFuture(parseISO(event.endDate)), events),
    [events]
  );
  const sortedEvents = pastEvents.sort((a, b) =>
    a.endDate < b.endDate ? -1 : a.endDate > b.endDate ? 1 : 0
  );

  return (
    <>
      <CustomHead title="Plant-Burher vergange Events" index={true} />
      <div className="mx-auto my-4 flex flex-col justify-center">
        <p className="mb-4 text-center text-2xl font-bold md:text-2xl">
          Vergangene Events mit Plant-Burger 📅
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {sortedEvents.map((event) => (
            <Event key={event.name} event={event} />
          ))}
        </div>
      </div>
    </>
  );
};

interface QueryResponse {
  allEvents: IEvent[];
}

export async function getStaticProps() {
  const eventResponse: QueryResponse = await request({
    query: EVENT_QUERY,
  });
  return {
    props: { events: eventResponse.allEvents },
  };
}

export default Events;
