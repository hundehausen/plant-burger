const Allergenes = () => {
  return (
    <div className="text-center">
      <p className="text-2xl pb-4">
        Allergenkennzeichnung (nach EU-Verordnung)
      </p>
      <ul className="columns-2 max-w-3xl mx-auto text-left inline-block">
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
    </div>
  );
};

export default Allergenes;
