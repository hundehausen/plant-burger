const Allergenes = () => {
  return (
    <div>
      <p className="text-2xl md:text-3xl pb-4">
        <span className="inline-block">Allergenkennzeichnung</span>{" "}
        <span className="inline-block">(nach EU-Verordnung)</span>
      </p>
      <ul className="columns-2 md:columns-3 max-w-3xl mx-auto text-left inline-block">
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
      <p className="text-gray-600 mt-2 italic md:text-lg">
        Bei uns sind alle Zutaten, sowie die Zubereitung 100 % vegan 🌱
      </p>
    </div>
  );
};

export default Allergenes;
