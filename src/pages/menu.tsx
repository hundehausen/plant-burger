import { gql } from "graphql-request";
import Article, { IArticle } from "../components/Article";
import { request } from "../lib/datocms";

const menuQuery = gql`
  {
    allArticles {
      title
      ingredients
      allergyList
      price
      image {
        responsiveImage {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
      extras {
        value
      }
    }
  }
`;

interface QueryResponse {
  allArticles: IArticle[];
}

export async function getStaticProps() {
  const articles: QueryResponse = await request({
    query: menuQuery,
  });
  return {
    props: { articles: articles.allArticles },
  };
}

const Menu = ({ articles }: { articles: IArticle[] }) => {
  return (
    <div className="flex flex-row gap-8 p-8">
      {articles.map((article) => (
        <Article article={article} key={article.title} />
      ))}
    </div>
  );
};

export default Menu;
