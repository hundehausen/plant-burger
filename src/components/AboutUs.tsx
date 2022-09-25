import Image from 'next/future/image';

import foodtruck from '../../public/truck.jpg';

interface AboutUsProps {
  className?: string;
}

const AboutUs = ({ className, ...other }: AboutUsProps) => {
  return (
    <div
      className={`${className} mx-auto max-w-sm rounded-md border-2 border-gray-800 md:max-w-2xl lg:max-w-4xl`}
      {...other}
    >
      <Image
        src={foodtruck}
        alt="Unser Foodtruck"
        className="h-auto w-full rounded-t-md"
        sizes="100vw"
      />
      <div className="p-4">
        <h5 className="text-2xl font-bold">Plant-Burger 🌱</h5>
        <p className="tracking-tight text-gray-800">
          Mit unserer 100% veganen Speisekarte möchten wir der Umwelt und der
          Gesundheit unserer Kund:innen etwas Gutes tun. Noch nie war auf
          Fleisch zu verzichten so einfach und mit unserem gelernten Koch wird
          jeder Burger zum Geschmackserlebnis.
        </p>
        <p className="tracking-tight text-gray-800">
          Die vegane Variante rückt in den Vordergrund, raus aus dem
          Schattendasein! Regional, nachhaltig, lecker - so sind unsere Burger
          und unser Konzept vom Foodtrailer. Die mobile Variante erlaubt es uns
          unseren Burger dort zu präsentieren, wo viele Menschen sind. Wir
          wollen gesehen werden. Wir wollen, dass alle die veganen Produkte
          probieren können und sich öffnen für eine Revolution der Ernährung.
          Tierleid soll zukünftig nicht mitgekauft werden.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
