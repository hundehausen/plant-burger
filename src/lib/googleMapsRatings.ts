import axios from 'axios';
import { partition, propEq } from 'ramda';

import type { Review } from '../components/GoogleReviews';

export const fetchGoogleReviews = async () => {
  try {
    // fetch latest five reviews
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJYQ-9xsRrMQsRaG50LKHF7zI&key=${process.env.NEXT_GOOGLE_MAPS_API_TOKEN}&language=de`
    );

    const rawReviews: Review[] = response.data.result.reviews;
    const goodReviews = rawReviews.filter((review) => review.rating >= 3);
    const [reviewsWithoutText, reviewsWithText] = partition(
      propEq('text', ''),
      goodReviews
    );
    // if reviews with text are less than three, just take all reviews
    const filteredReviews =
      reviewsWithText.length < 3 ? goodReviews : reviewsWithText;
    // sorts ascending
    const sortedReviews = filteredReviews.sort((a, b) => a.rating - b.rating);
    if (sortedReviews.length === 5) {
      // we only want four reviews, kick the worst review out
      sortedReviews.shift();
    }
    return sortedReviews;
  } catch (error) {
    console.error(error);
    return [];
  }
};
