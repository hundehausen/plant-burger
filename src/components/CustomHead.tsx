import Head from 'next/head';

const CustomHead = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Mit unserer 100% veganen Speisekarte möchten wir der Umwelt und der Gesundheit unserer Kund:innen etwas Gutes tun. Noch nie war auf Fleisch zu verzichten so einfach und mit unserem gelernten Koch wird jeder Burger zum Geschmackserlebnis."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
