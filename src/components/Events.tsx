import { format, parseISO } from "date-fns";
import { de } from "date-fns/locale";
import Link from "next/link";
import CustomButton from "./CustomButton";

export interface IEvent {
  id: number;
  name: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}

const Event = ({ event }: { event: IEvent }) => {
  return (
    <div className="max-w-sm rounded-md border-gray-800 border-2">
      <div className="p-4">
        <p>{event.id}</p>
        <p className="text-2xl font-bold tracking-tight text-gray-800">
          {event.name}
        </p>
        {event.startDate && event.endDate && (
          <p className="">
            {format(parseISO(event.startDate), "dd.MM.yyyy HH:mm", {
              locale: de,
            })}{" "}
            bis {format(parseISO(event.endDate), "dd.MM.yyyy HH:mm")}
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
