import fromUnixTime from 'date-fns/fromUnixTime';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { SiGooglestreetview } from 'react-icons/si';

export interface Review {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

const Rating = ({ rating }: { rating: number }) => {
  const yellowStars = [...Array(rating)].map((yellowStar, index) => (
    <FaStar key={index} className="text-yellow-400" />
  ));
  const grayStars = [...Array(5 - rating)].map((greyStar, index) => (
    <FaStar key={index} className="text-grey-300" />
  ));
  return (
    <div className="flex items-center mb-4" title={`${rating} von 5 Sternen`}>
      {yellowStars.map((item) => item)}

      {grayStars}
    </div>
  );
};

const GoogleReview = ({ review }: { review: Review }) => {
  return (
    <article className="border-2 border-gray-800 rounded-md p-4 max-w-sm w-80">
      <div className="flex items-center mb-4 space-x-4">
        <Image
          className="rounded-full"
          src={review.profile_photo_url}
          width={40}
          height={40}
          alt="Reviewer avatar"
        />
        <div className="space-y-1 font-medium">
          <p>
            {review.author_name}
            <time
              dateTime={fromUnixTime(review.time).toDateString()}
              className="block text-sm text-gray-500"
            >
              {review.relative_time_description}
            </time>
          </p>
        </div>
      </div>
      <Rating rating={review.rating} />
      <p className="font-light">{review.text || 'Kein Text hinterlassen'}</p>
    </article>
  );
};

export const GoogleReviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <>
      <div className="text-xl md:text-2xl flex justify-center items-center">
        <span>Unsere Google Bewertungen</span>
        <SiGooglestreetview className="ml-4" />
      </div>
      <div className="flex flex-wrap gap-8 justify-center mx-auto my-4">
        {reviews.map((review) => (
          <GoogleReview key={review.author_name} review={review} />
        ))}
      </div>
    </>
  );
};
