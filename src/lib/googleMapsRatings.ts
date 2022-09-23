import axios from 'axios';

import { Review } from '../components/GoogleReviews';

export const fetchGoogleReviews = async () => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJYQ-9xsRrMQsRaG50LKHF7zI&key=${process.env.NEXT_GOOGLE_MAPS_API_TOKEN}&language=de`
    );

    const rawReviews: Review[] = response.data.result.reviews;
    const goodReviews = rawReviews.filter((review) => review.rating >= 3);
    const sortedReviews = goodReviews.sort((a, b) => a.rating - b.rating);
    if (sortedReviews.length === 5) {
      sortedReviews.shift();
    }
    return sortedReviews;
  } catch (error) {
    console.error(error);
    return [];
  }
};
