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
    <div className="max-w-xs rounded-md border-gray-800 border-2">
      <Image
        data={article.image.responsiveImage}
        className="rounded-tl-md rounded-tr-md"
      />
      <div className="p-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-800">
          {article.title}
        </h5>
        {article.ingredients && (
          <p className="font-normal text-gray-700">{article.ingredients}</p>
        )}
        {article.allergyList && (
          <p className="font-normal text-gray-500">({article.allergyList})</p>
        )}
        {article.price && (
          <span className="font-bold text-gray-800">{article.price}</span>
        )}
        {article.extras && <StructuredText data={article.extras} />}
      </div>
    </div>
  );
};

export default Article;
