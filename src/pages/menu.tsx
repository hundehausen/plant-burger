import { gql } from "graphql-request";
import Article, { IArticle } from "../components/Article";
import CustomHead from "../components/CustomHead";
import { request } from "../lib/datocms";
import { propEq, partition } from "ramda";
import Allergenes from "../components/Allergenes";

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
  const [burgers, next] = partition(propEq("category", "Burger"), articles);
  const [sideDishes, next2] = partition(propEq("category", "Beilagen"), next);
  const [drinks, otherStuff] = partition(propEq("category", "Getränke"), next2);

  return (
    <>
      <CustomHead title="Plant-Burger Speisekarte" />
      <div className="text-center p-8">
        {burgers.length > 0 && (
          <div className="category">
            <span className="text-2xl font-bold">Burger</span>
            <div className="flex flex-row flex-wrap gap-16 p-8 justify-center">
              {burgers.map((burger) => (
                <Article article={burger} key={burger.title} />
              ))}
            </div>
          </div>
        )}

        {sideDishes.length > 0 && (
          <div className="category">
            <span className="text-2xl font-bold">Beilagen</span>
            <div className="flex flex-row flex-wrap gap-16 p-8 justify-center">
              {sideDishes.map((sideDish) => (
                <Article article={sideDish} key={sideDish.title} />
              ))}
            </div>
          </div>
        )}

        {drinks.length > 0 && (
          <div className="category">
            <span className="text-2xl font-bold">Getränke</span>
            <div className="flex flex-row flex-wrap gap-16 p-8 justify-center">
              {drinks.map((drink) => (
                <Article article={drink} key={drink.title} />
              ))}
            </div>
          </div>
        )}

        {otherStuff.length > 0 && (
          <div className="category">
            <span className="text-2xl font-bold">Anderes</span>
            <div className="flex flex-row flex-wrap gap-16 p-8 justify-center">
              {otherStuff.map((otherArticle) => (
                <Article article={otherArticle} key={otherArticle.title} />
              ))}
            </div>
          </div>
        )}

        <Allergenes />
      </div>
    </>
  );
};

export default Menu;
