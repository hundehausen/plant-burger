const Allergenes = () => {
  return (
    <div>
      <p className="pb-4 text-2xl md:text-3xl">
        <span className="inline-block">Allergenkennzeichnung</span>{' '}
        <span className="inline-block">(nach EU-Verordnung)</span>
      </p>
      <ul className="mx-auto inline-block max-w-3xl columns-2 text-left md:columns-3">
        <li>
          <strong>A</strong> - Glutenhaltiges Getreide
        </li>
        <li>
          <strong>E</strong> - Erdnüsse
        </li>
        <li>
          <strong>F</strong> - Sojabohnen
        </li>
        <li>
          <strong>H</strong> - Schalenfrüchte
        </li>
        <li>
          <strong>L</strong> - Sellerie
        </li>
        <li>
          <strong>M</strong> - Senf
        </li>
        <li>
          <strong>N</strong> - Sesam
        </li>
        <li>
          <strong>O</strong> - Schwefeldioxid und Sulfite
        </li>
        <li>
          <strong>P</strong> - Lupinen
        </li>
      </ul>
      <p className="mt-2 italic text-gray-600 dark:text-gray-400 md:text-lg">
        Bei uns sind alle Zutaten, sowie die Zubereitung 100 % vegan 🌱
      </p>
    </div>
  );
};

export default Allergenes;
