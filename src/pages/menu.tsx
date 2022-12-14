import { gql } from 'graphql-request';
import { partition, propEq } from 'ramda';

import Allergenes from '../components/Allergenes';
import Article, { IArticle } from '../components/Article';
import CustomHead from '../components/CustomHead';
import { request } from '../lib/datocms';

const menuQuery = gql`
  {
    allArticles(filter: { showOnWebsite: { eq: "true" } }) {
      title
      category
      ingredients
      allergyList
      price
      pricelist
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
  const response: QueryResponse = await request({
    query: menuQuery,
  });
  return {
    props: { articles: response.allArticles },
  };
}

const Menu = ({ articles }: { articles: IArticle[] }) => {
  const [burgers, next] = partition(propEq('category', 'Burger'), articles);
  const [sideDishes, next2] = partition(propEq('category', 'Beilagen'), next);
  const [drinks, otherStuff] = partition(propEq('category', 'Getränke'), next2);

  return (
    <>
      <CustomHead title="Plant-Burger Speisekarte" />
      <h1 className="text-center text-2xl font-bold">Speisekarte</h1>
      <div className="p-8 text-center">
        {burgers.length > 0 && (
          <div id="burgers" className="category">
            <div className="flex flex-row flex-wrap justify-center gap-8 p-8">
              {burgers.map((burger) => (
                <Article article={burger} key={burger.title} />
              ))}
            </div>
          </div>
        )}

        {(sideDishes.length > 0 || drinks.length > 0) && (
          <div id="side-dishes-and-drinks" className="category">
            <div className="flex flex-row flex-wrap justify-center gap-8 p-8">
              {sideDishes.map((sideDish) => (
                <Article article={sideDish} key={sideDish.title} />
              ))}
              {drinks.map((drink) => (
                <Article article={drink} key={drink.title} />
              ))}
            </div>
          </div>
        )}

        {otherStuff.length > 0 && (
          <div id="other-articles" className="category">
            <div className="flex flex-row flex-wrap justify-center gap-8 p-8">
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
