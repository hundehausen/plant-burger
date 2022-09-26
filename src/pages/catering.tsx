import ContactForm from '../components/ContactForm';
import CustomHead from '../components/CustomHead';

const Catering = () => {
  return (
    <>
      <CustomHead title="Plant-Burger Catering" />
      <div className="flex flex-wrap justify-center gap-4">
        <div className="max-w-md lg:ml-auto lg:mr-0">
          <h2 className="mb-4 text-2xl font-bold">
            Catering bei Veranstaltungen
          </h2>
          <p>Die perfekte Wahl sind wir bei:</p>
          <ul className="my-4">
            <li>Hochzeiten 👰🏻‍♂️</li>
            <li>Firmenfeiern 👨🏻‍🍳</li>
            <li>Geburtstagen 🎂</li>
            <li>Straßenfesten 🛣</li>
            <li>Stadtfesten 🌃</li>
            <li>Private Feiern 🍾</li>
            <li>Märkten 🥕</li>
            <li>Konzerten 🎸</li>
            <li>Sonstige Events 🛻</li>
          </ul>
          <p>
            In der Region der Ortenau 📍 (Offenburg, Appenweier, Kehl,
            Strasburg, Lahr, Riegel, Freiburg, Baden-Baden, Karlsruhe)
          </p>
          <p className="my-4">
            Wir unterstützen Sie bei Ihren Veranstaltungen mit unseren großen
            Angeboten. Fragen Sie uns gleich an!
          </p>
        </div>
        <ContactForm className="max-w-md lg:mr-auto lg:ml-0" />
      </div>
    </>
  );
};

export default Catering;
