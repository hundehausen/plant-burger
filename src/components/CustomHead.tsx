import Head from 'next/head';

const CustomHead = ({
  title,
  index = true,
}: {
  title: string;
  index?: boolean;
}) => (
  <Head>
    <title>{title}</title>
    <meta
      name="description"
      content="Mit unserer 100% veganen Speisekarte möchten wir der Umwelt und der Gesundheit unserer Kund:innen etwas Gutes tun. Noch nie war auf Fleisch zu verzichten so einfach und mit unserem gelernten Koch wird jeder Burger zum Geschmackserlebnis. Unterwegs in der gesamten Ortenau und darüber hinaus!"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="UTF-8" />
    <meta
      name="keywords"
      content="Plant Burger, Offenburg, Appenweiher, Ortenau, Kehl, vegan Offenburg, Haslach"
    ></meta>
    {!index && <meta name="robots" content="noindex, follow" />}
    <link rel="icon" type="image/png" href="/favicon-transparent.png" />
  </Head>
);

export default CustomHead;
