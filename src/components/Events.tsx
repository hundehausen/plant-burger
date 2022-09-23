import Link from "next/link";
import { formatDate } from "../lib/dateHelpers";
import CustomButton from "./CustomButton";

export interface IEvent {
  id: number;
  name: string;
  description: string;
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
    <div className="max-w-sm rounded-md border-gray-800 border-2">
      <div className="p-4">
        <p className="text-2xl font-bold tracking-tight text-gray-800">
          {event.name}
        </p>
        {event.startDate && event.endDate && (
          <p className="">
            {formatDate(event.startDate)} bis {formatDate(event.endDate)}
          </p>
        )}
        {event.description && (
          <p className="text-gray-700">{event.description}</p>
        )}
        <Link href={`/event/${event.id}`}>
          <CustomButton>Mehr Infos</CustomButton>
        </Link>
      </div>
    </div>
  );
};

const Events = ({ events }: { events: IEvent[] }) => {
  return (
    <div className="flex flex-col justify-center mx-auto my-4">
      <p className="text-xl md:text-2xl text-center mb-4">
        Events mit Plant-Burger 📅
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {events.map((event) => (
          <Event key={event.name} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
