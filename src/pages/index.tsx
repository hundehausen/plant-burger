import { gql } from 'graphql-request';

import AboutUs from '../components/AboutUs';
import CustomHead from '../components/CustomHead';
import Events, { IEvent } from '../components/Events';
import { GoogleReviews, Review } from '../components/GoogleReviews';
import { request } from '../lib/datocms';
import { fetchGoogleReviews } from '../lib/googleMapsRatings';

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

const Home = ({ events, reviews }: { events: IEvent[]; reviews: Review[] }) => {
  return (
    <>
      <CustomHead title="Plant-Burger" />
      <main className="flex flex-col justify-center">
        <AboutUs className="mb-8" />
        <Events className="mb-16" events={events} />
        {reviews.length > 1 && <GoogleReviews reviews={reviews} />}
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
  const reviews = await fetchGoogleReviews();
  return {
    props: { events: events.allEvents, reviews },
  };
}

export default Home;
