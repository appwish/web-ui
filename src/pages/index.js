import tw from 'tailwind.macro';
import GraphQLConnectionTester from '../components/GraphQLConnectionTester';
import { withApollo } from '../lib/apollo';

const Index = () => (
  <div css={tw`h-screen flex`}>
    <GraphQLConnectionTester css={tw`m-auto`} />
  </div>
);

export default withApollo(Index);
