import { format, parseISO } from "date-fns";

export interface IEvent {
  name: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}

const Event = ({ event }: { event: IEvent }) => {
  return (
    <div className="max-w-sm rounded-md border-gray-400 border-2">
      <div className="p-4">
        <p className="text-2xl font-bold tracking-tight text-gray-800 text-left">
          {event.name}
        </p>
        {event.startDate && event.endDate && (
          <p className="text-left">
            {format(parseISO(event.startDate), "dd.MM.yyyy hh:mm")} bis{" "}
            {format(parseISO(event.endDate), "dd.MM.yyyy hh:mm")}
          </p>
        )}
        {event.description && (
          <p className="text-gray-700 text-left">{event.description}</p>
        )}
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
      <div className="flex flex-wrap gap-4 text-center justify-center">
        {events.map((event) => (
          <Event key={event.name} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
