import withApollo from '../lib/apollo'
import Layout from '../components/layout'
import Filters from '../components/filters'
import Card from '../components/card'
import { ReactComponent as WaitImg } from '../../public/hourglass.svg'

const WishFeed = () => (
  <Layout>
    <Filters />
    <div className="flex justify-between flex-wrap">
      <Card />
      <Card />
      <Card />
      <Card expanded />
      <Card />
      <Card />
      <Card expanded />
      <Card />
      <Card />
      <Card />
    </div>
    <WaitImg className="mx-auto mt-8" />
  </Layout>
)

export default withApollo(WishFeed)
