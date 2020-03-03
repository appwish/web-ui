import withApollo from '../lib/apollo'
import Layout from '../components/layout'

const Profile = () => (
  <Layout>
    <div className="flex">
      <div className="w-1/4 mt-8">
        <div
          style={{ height: '300px' }}
          className="border-2 border-r-0 border-gray-200 bg-white"
        />
      </div>
      <div className="w-3/4 mt-8">
        <div
          style={{ height: '300px' }}
          className="border-2 border-gray-200 bg-white"
        />
      </div>
    </div>
    <ul className="flex border-b">
      <li className="-mb-px mr-1">
        <a
          className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700 font-semibold"
          href="#"
        >
          Tab 1
        </a>
      </li>
      <li className="mr-1">
        <a
          className="bg-white inline-block py-2 px-4 text-gray-700 font-semibold"
          href="#"
        >
          Tab 2
        </a>
      </li>
      <li className="mr-1">
        <a
          className="bg-white inline-block py-2 px-4 text-gray-700 font-semibold"
          href="#"
        >
          Tab 3
        </a>
      </li>
      <li className="mr-1">
        <a
          className="bg-white inline-block py-2 px-4 text-gray-700 font-semibold"
          href="#"
        >
          Tab 4
        </a>
      </li>
    </ul>
    <div className="mx-auto">
      <div
        style={{ height: '300px' }}
        className="border-2 border-t-0 border-gray-200 bg-white"
      />
    </div>
  </Layout>
)

export default withApollo(Profile)
