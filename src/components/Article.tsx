/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { StructuredText, StructuredTextGraphQlResponse } from 'react-datocms';
export interface IArticle {
  title: string;
  category: string;
  ingredients: string;
  allergyList: string;
  extras: StructuredTextGraphQlResponse;
  price: string;
  pricelist: {
    name: string;
    price: string;
  }[];
  image: {
    responsiveImage: {
      aspectRatio: number;
      width: number;
      base64: string;
      sizes: string;
      srcSet: string;
      alt: string;
      title?: string;
    };
  };
}

interface ArticleProps {
  article: IArticle;
}

const Article = ({ article }: ArticleProps) => {
  return (
    <div className="min-w-[320px] max-w-xs rounded-md border-2 border-gray-900 dark:border-amber-800">
      <Image
        src={article.image.responsiveImage.srcSet}
        className="h-auto w-full rounded-t-md"
        blurDataURL={article.image.responsiveImage.base64}
        alt={`${article.title} Bild`}
        sizes="100vw"
        width={464}
        height={464}
      />
      <div className="p-4">
        <h5 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-200">
          {article.title}
        </h5>
        {article.ingredients && (
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {article.ingredients}
          </p>
        )}
        {article.pricelist && (
          <div className="my-2">
            {article.pricelist.map(({ name, price }) => (
              <div key={name} className="flex flex-row justify-between text-lg">
                <span>{name}</span>
                <span>{price}</span>
              </div>
            ))}
          </div>
        )}
        {article.allergyList && (
          <p className="text-lg text-gray-500 dark:text-gray-400">
            ({article.allergyList})
          </p>
        )}
        {article.price && (
          <span className="text-xl font-bold text-gray-800 dark:text-gray-200">
            {article.price}
          </span>
        )}
        {article.extras && <StructuredText data={article.extras} />}
      </div>
    </div>
  );
};

export default Article;
