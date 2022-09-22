/* eslint-disable jsx-a11y/alt-text */
import {
  Image,
  StructuredText,
  StructuredTextGraphQlResponse,
} from "react-datocms";

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
    <div className="max-w-xs">
      <Image data={article.image.responsiveImage} />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {article.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {article.ingredients}
      </p>
      <p className="font-normal text-gray-500 dark:text-gray-400">
        ({article.allergyList})
      </p>
      <span className="font-bold text-gray-900">{article.price}</span>
      <StructuredText data={article.extras} />
    </div>
  );
};

export default Article;
