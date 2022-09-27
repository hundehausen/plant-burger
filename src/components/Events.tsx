import { isFuture, parseISO } from 'date-fns';
import Link from 'next/link';
import { partition } from 'ramda';
import { useMemo } from 'react';

import { formatDate } from '../lib/dateHelpers';
import CustomButton from './CustomButton';

export interface IEvent {
  id: number;
  name: string;
  description: string;
  locationAddress: string;
  location: {
    latitude: string;
    longitude: string;
  };
  startDate: string;
  endDate: string;
  updatedAt: string;
}

const Event = ({ event }: { event: IEvent }) => {
  return (
    <div className="max-w-sm rounded-md border-2 border-gray-800 dark:border-amber-800 dark:bg-purple-700 dark:text-gray-100">
      <div className="p-4">
        <p className="text-xl font-bold tracking-tight">{event.name}</p>
        {event.startDate && event.endDate && (
          <p>
            {`${formatDate(event.startDate)} bis ${formatDate(event.endDate)}`}
          </p>
        )}
        {event.description && (
          <p className="text-gray-700 dark:text-gray-200">
            {event.description}
          </p>
        )}
        <Link href={`/event/${event.id}`}>
          <a>
            <CustomButton>Mehr Infos</CustomButton>
          </a>
        </Link>
      </div>
    </div>
  );
};

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

  return (
    <div
      className={`${className} mx-auto my-4 flex flex-col justify-center`}
      {...other}
    >
      <p className="mb-4 text-center text-2xl font-bold md:text-2xl">
        Events mit Plant-Burger 📅
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {upcomingEvents.map((event) => (
          <Event key={event.name} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
