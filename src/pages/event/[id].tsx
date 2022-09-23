import type { GetServerSideProps } from "next";
import CustomHead from "../../components/CustomHead";
import { gql } from "graphql-request";
import { request } from "../../lib/datocms";
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

interface QueryResponse {
  event: IEvent | undefined;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id as string;
  if (!id) {
    return { props: { event: undefined } };
  }
  const event: QueryResponse = await request({
    query: QUERY_BY_ID,
    variables: { id: id },
  });
  return {
    props: { event: event.event },
  };
};

export default EventPage;
