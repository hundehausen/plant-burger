import Head from "next/head";

const CustomHead = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
