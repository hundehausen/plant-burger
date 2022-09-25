import fromUnixTime from 'date-fns/fromUnixTime';
import Image from 'next/future/image';
import { FaStar } from 'react-icons/fa';
import { SiGooglestreetview } from 'react-icons/si';

export interface Review {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  photo: string;
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
    <div className="mb-4 flex items-center" title={`${rating} von 5 Sternen`}>
      {yellowStars.map((item) => item)}

      {grayStars}
    </div>
  );
};

const GoogleReview = ({ review }: { review: Review }) => {
  return (
    <article className="w-80 max-w-sm rounded-md border-2 border-gray-800 p-4">
      <div className="mb-4 flex items-center space-x-4">
        <Image
          className="rounded-full"
          src={`data:image/jpeg;base64,${review.photo}`}
          width={40}
          height={40}
          alt="Reviewer avatar"
          unoptimized
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
      <div className="flex items-center justify-center text-xl md:text-2xl">
        <p className="text-center text-2xl font-bold md:text-2xl">
          Unsere Google Bewertungen
        </p>
        <SiGooglestreetview className="ml-4" />
      </div>
      <div className="mx-auto my-4 flex flex-wrap justify-center gap-8">
        {reviews.map((review) => (
          <GoogleReview key={review.author_name} review={review} />
        ))}
      </div>
    </>
  );
};
