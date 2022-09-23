import CustomHead from "../components/CustomHead";
import Events, { IEvent } from "../components/Events";
import { gql } from "graphql-request";
import { request } from "../lib/datocms";
import InstagramPosts from "../components/InstagramPosts";

const eventQuery = gql`
  {
    allEvents {
      id
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

const Home = ({ events }: { events: IEvent[] }) => {
  return (
    <>
      <CustomHead title="Plant-Burger" />
      <main className="flex flex-col justify-center">
        <Events events={events} />
        <InstagramPosts />
      </main>
    </>
  );
};

interface QueryResponse {
  allEvents: IEvent[];
}

export async function getStaticProps() {
  const events: QueryResponse = await request({
    query: eventQuery,
  });
  return {
    props: { events: events.allEvents },
  };
}

export default Home;
