import Image from 'next/future/image';

import foodtruck from '../../public/truck.jpg';

const AboutUs = () => {
  return (
    <Image
      src={foodtruck}
      alt="Unser Foodtruck"
      className="rounded-md border-2 border-gray-800 max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto"
    />
  );
};

export default AboutUs;
