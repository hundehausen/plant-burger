import fromUnixTime from 'date-fns/fromUnixTime';
import Image from 'next/future/image';
import { FaStar } from 'react-icons/fa';
import { SiGooglestreetview } from 'react-icons/si';

import CustomButton from './CustomButton';

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
    <article className="max-w-sm rounded-md border-2 border-gray-800 p-4">
      <div className="mb-4 flex items-center space-x-4">
        <Image
          className="rounded-full"
          src={`data:image/jpeg;base64,${review.photo}`}
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

interface GoogleReviewsProps {
  className?: string;
  reviews: Review[];
}

export const GoogleReviews = ({
  className,
  reviews,
  ...other
}: GoogleReviewsProps) => {
  return (
    <div className={`${className} flex flex-col justify-center`} {...other}>
      <p className="text-center text-2xl font-bold md:text-2xl">
        Unsere Google Bewertungen
        <SiGooglestreetview className="ml-2 inline-block align-baseline" />
      </p>

      <div className="mx-auto my-4 flex flex-wrap justify-center gap-8">
        {reviews.map((review) => (
          <GoogleReview key={review.author_name} review={review} />
        ))}
      </div>
      <a
        href="https://g.page/r/CWhudCyhxe8yEBM/review"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Bewertung"
        className="mx-auto"
      >
        <CustomButton>Google Bewertung abgeben</CustomButton>
      </a>
    </div>
  );
};
