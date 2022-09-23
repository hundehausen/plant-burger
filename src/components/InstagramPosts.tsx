import { InstagramEmbed } from "react-social-media-embed";
import { FaInstagram } from "react-icons/fa";

const InstagramPosts = () => {
  return (
    <div className="flex flex-col justify-center mx-auto my-4">
      <p className="text-center text-2xl mb-4 flex justify-center items-center">
        Unsere letzten Instagram Posts <FaInstagram className="ml-2" />
      </p>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        <InstagramEmbed
          url="https://www.instagram.com/p/CisrxNzLX_b/"
          width={350}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CisrtJgrm_y/"
          width={350}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CisrjbMLH70/"
          width={350}
        />
      </div>
    </div>
  );
};

export default InstagramPosts;
