import type { GetStaticProps } from "next";
import { gql } from "graphql-request";
import { request } from "../../lib/datocms";
import CustomHead from "../../components/CustomHead";
import { IEvent } from "../../components/Events";

const QUERY_BY_ID = gql`
  query ($id: ItemId!) {
    event(filter: { id: { eq: $id } }) {
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
  if (!event) {
    return <p className="text-2xl">Kein Event gefunden</p>;
  }

  return (
    <>
      <CustomHead title="Plant-Burger " />
      <main className="text-center">{JSON.stringify(event)}</main>
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
