import { isFuture, parseISO } from 'date-fns';
import Link from 'next/link';
import { partition } from 'ramda';
import { useMemo } from 'react';

import Event, { IEvent } from './Event';

interface EventsProps {
  events: IEvent[];
  className: string;
}

const Events = ({ events, className, ...other }: EventsProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [upcomingEvents, pastEvents] = useMemo(
    () => partition((event) => isFuture(parseISO(event.endDate)), events),
    [events]
  );
  const sortedEvents = upcomingEvents.sort((a, b) =>
    a.endDate < b.endDate ? -1 : a.endDate > b.endDate ? 1 : 0
  );

  return (
    <div
      className={`${className} mx-auto my-4 flex flex-col justify-center text-center`}
      {...other}
    >
      <p className="mb-4 text-center text-2xl font-bold md:text-2xl">
        Events mit Plant-Burger 📅
      </p>
      <div className="flex flex-wrap justify-center gap-8 text-left">
        {sortedEvents.length > 0 ? (
          sortedEvents.map((event) => <Event key={event.name} event={event} />)
        ) : (
          <p>Aktuell sind keine Events geplant.</p>
        )}
      </div>
      <Link
        href={'/past-events'}
        className="mt-8 transition hover:text-secondary dark:hover:text-amber-400"
      >
        vergangene Events
      </Link>
    </div>
  );
};

export default Events;
