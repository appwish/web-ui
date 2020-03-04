import withApollo from '../lib/apollo'
import Layout from '../components/layout'

const NewWish = () => (
  <Layout>
    <div className="mx-auto mt-8">
      <div
        style={{ height: '700px' }}
        className="border-2 border-gray-200 bg-white"
       />
      <div className="text-right">
        <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-200 hover:border-transparent" type="button">
          Draft
        </button>
        <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-200 hover:border-transparent " type="button">
          Wish
        </button>
      </div>
    </div>
  </Layout>
)

export default withApollo(NewWish)
