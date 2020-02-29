import { classnames } from 'tailwindcss-classnames'
import GraphQLConnectionTester from '../components/GraphQLConnectionTester'
import withApollo from '../lib/apollo'
import Layout from '../components/layout'

const Feed = () => (
  <Layout>
    {/* <GraphQLConnectionTester /> */}
  </Layout>
)

export default withApollo(Feed)
