import Link from 'next/link';

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
    <div className="relative max-w-sm rounded-md border-2 border-gray-900 pb-14 dark:border-amber-800 dark:bg-purple-700 dark:text-gray-100">
      <div className="min-h-full p-4">
        <h2 className="text-xl font-bold tracking-tight">{event.name}</h2>
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
      </div>
      <Link href={`/event/${event.id}`} className="absolute bottom-2 left-4">
        <CustomButton>Mehr Infos</CustomButton>
      </Link>
    </div>
  );
};

export default Event;
