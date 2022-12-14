import { gql } from 'graphql-request';
import { StructuredText, StructuredTextGraphQlResponse } from 'react-datocms';

import CustomHead from '../components/CustomHead';
import { request } from '../lib/datocms';

const privacyQuery = gql`
  {
    privacy {
      text {
        value
      }
    }
  }
`;

interface QueryResponse {
  privacy: { text: { value: StructuredTextGraphQlResponse } };
}

export async function getStaticProps() {
  const response: QueryResponse = await request({
    query: privacyQuery,
  });
  return {
    props: { text: response.privacy.text.value },
  };
}

const Privacy = ({ text }: { text: StructuredTextGraphQlResponse }) => {
  return (
    <>
      <CustomHead title="Plant-Burger Datenschutzerkl√§rung" index={false} />
      <div className="container mx-auto">
        <p className="my-8 text-2xl font-bold">Datenschutzerkl√§rung</p>
        {text && <StructuredText data={text} />}
      </div>
    </>
  );
};

export default Privacy;
