import { gql } from 'graphql-request';
import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

import CustomHead from '../../components/CustomHead';
import { IEvent } from '../../components/Events';
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

  return (
    <>
      <CustomHead title={`Plant-Burger @ ${event.name}`} />
      <main className="max-w-3xl mx-auto">
        <div className="p-6 border-4 border-gray-900 rounded-3xl mx-4">
          <p className="text-2xl font-bold">{event.name}</p>
          {event.startDate && event.endDate && (
            <p className="">
              {`📅 ${formatDate(event.startDate)} bis ${formatDate(
                event.endDate
              )}`}
            </p>
          )}
          {event.locationAddress && (
            <p className="text-gray-700 font-light">{`📍 ${event.locationAddress}`}</p>
          )}
          {event.description && (
            <p className="text-gray-700">{event.description}</p>
          )}
          {event.updatedAt && (
            <p className="text-gray-500 text-sm italic mt-2">
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
  const event: QueryResponseById = await request({
    query: QUERY_BY_ID,
    variables: { id: id },
  });
  return {
    props: { event: event.event },
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
