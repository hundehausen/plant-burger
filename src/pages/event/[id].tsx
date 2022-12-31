import { gql } from 'graphql-request';
import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

import CustomHead from '../../components/CustomHead';
import { IEvent } from '../../components/Event';
import { formatDate } from '../../lib/dateHelpers';
import { request } from '../../lib/datocms';

const QUERY_BY_ID = gql`
  query ($id: ItemId!) {
    event(filter: { id: { eq: $id } }) {
      name
      description
      locationAddress
      location {
        latitude
        longitude
      }
      startDate
      endDate
      updatedAt
    }
  }
`;

const GET_ALL_EVENT_IDS = gql`
  {
    allEvents {
      id
    }
  }
`;

interface EventPageProps {
  event: IEvent | undefined;
}

const EventPage = ({ event }: EventPageProps) => {
  const Map = useMemo(
    () =>
      dynamic(() => import('../../components/Map'), {
        loading: () => <p>Map is loading</p>,
        ssr: false,
      }),
    []
  );

  if (!event) {
    return <p className="text-2xl">Kein Event gefunden</p>;
  }

  const destination = encodeURI(event.locationAddress);
  const googleDirectionUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

  return (
    <>
      <CustomHead title={`Plant-Burger @ ${event.name}`} />
      <main className="mx-auto max-w-3xl">
        <div className="rounded-3xl border-4 border-gray-900 p-6 dark:border-amber-800">
          <h1 className="mb-2 text-2xl font-bold">{event.name}</h1>
          {event.startDate && event.endDate && (
            <p className="mb-1">
              {`📅 ${formatDate(event.startDate)} bis ${formatDate(
                event.endDate
              )}`}
            </p>
          )}
          {event.locationAddress && (
            <a
              href={googleDirectionUrl}
              target="_blank"
              rel="noreferrer"
              title="Starte eine Google Maps Navigation"
            >
              <p className="mb-1 inline-block font-light text-gray-700 dark:text-gray-200">{`📍 ${event.locationAddress}`}</p>
            </a>
          )}
          {event.description && (
            <p className="text-gray-700 dark:text-gray-200">
              {event.description}
            </p>
          )}
          {event.updatedAt && (
            <p className="mt-2 mb-1 text-sm italic text-gray-500 dark:text-gray-400">
              Zuletzt aktualisiert am {formatDate(event.updatedAt)}
            </p>
          )}
          {event.location.latitude && event.location.longitude && (
            <Map event={event} />
          )}
        </div>
      </main>
    </>
  );
};

interface QueryResponseById {
  event: IEvent | undefined;
}

interface QueryResponseAllIds {
  allEvents: Partial<IEvent>[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id as string;
  if (!id) {
    return { props: { event: undefined } };
  }
  const eventResponse: QueryResponseById = await request({
    query: QUERY_BY_ID,
    variables: { id: id },
  });
  return {
    props: { event: eventResponse.event },
  };
};

export const getStaticPaths = async () => {
  // Call an external API endpoint to get posts
  const response: QueryResponseAllIds = await request({
    query: GET_ALL_EVENT_IDS,
  });

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = response.allEvents.map((event) => ({
    params: { id: event.id },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
};

export default EventPage;
