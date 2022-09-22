import { gql } from "graphql-request";
import Article, { IArticle } from "../components/Article";
import CustomHead from "../components/CustomHead";
import { request } from "../lib/datocms";

const menuQuery = gql`
  {
    allArticles {
      title
      category
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
  const burgers = articles.filter((article) => article.category === "Burger");
  const sideDishes = articles.filter(
    (article) => article.category === "Beilagen"
  );

  return (
    <>
      <CustomHead title="Plant-Burger Speisekarte" />
      <div className="text-center">
        <span className="text-2xl font-bold">Burger</span>
        <div className="flex flex-row flex-wrap gap-16 p-8 justify-center">
          {burgers.map((burger) => (
            <Article article={burger} key={burger.title} />
          ))}
        </div>
        <span className="text-2xl font-bold">Beilagen</span>
        <div className="flex flex-row flex-wrap gap-16 p-8 justify-center">
          {sideDishes.map((sideDish) => (
            <Article article={sideDish} key={sideDish.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
