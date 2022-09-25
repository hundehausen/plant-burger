import { FaInstagram } from 'react-icons/fa';
import { InstagramEmbed } from 'react-social-media-embed';

const InstagramPosts = () => {
  return (
    <div className="mx-auto my-4 flex flex-col justify-center">
      <p className="mb-4 flex items-center justify-center text-center text-2xl">
        Unsere letzten Instagram Posts <FaInstagram className="ml-2" />
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-4">
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
