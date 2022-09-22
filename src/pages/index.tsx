import type { NextPage } from "next";
import CustomHead from "../components/CustomHead";
import { InstagramEmbed } from "react-social-media-embed";

const Home: NextPage = () => {
  return (
    <>
      <CustomHead title="Plant-Burger" />
      <main>
        <div className="flex justify-center">
          <InstagramEmbed
            url="https://www.instagram.com/p/CisrxNzLX_b/"
            width={350}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
