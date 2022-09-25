/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/future/image';
import { StructuredText, StructuredTextGraphQlResponse } from 'react-datocms';
export interface IArticle {
  title: string;
  category: string;
  ingredients: string;
  allergyList: string;
  extras: StructuredTextGraphQlResponse;
  price: string;
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
    <div className="min-w-[320px] max-w-xs rounded-md border-2 border-gray-800">
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
        <h5 className="text-3xl font-bold tracking-tight text-gray-800">
          {article.title}
        </h5>
        {article.ingredients && (
          <p className="text-lg text-gray-700">{article.ingredients}</p>
        )}
        {article.allergyList && (
          <p className="text-lg text-gray-500">({article.allergyList})</p>
        )}
        {article.price && (
          <span className="text-xl font-bold text-gray-800">
            {article.price}
          </span>
        )}
        {article.extras && <StructuredText data={article.extras} />}
      </div>
    </div>
  );
};

export default Article;
