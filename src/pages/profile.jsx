/* eslint-disable jsx-a11y/anchor-is-valid */
import withApollo from '../lib/apollo'
import Layout from '../components/layout'

const Profile = () => (
  <Layout>
    <div className="flex">
      <div className="w-1/4 mt-8">
        <div
          style={{ height: '300px' }}
          className="bg-white border-2 border-r-0 border-gray-200"
        />
      </div>
      <div className="w-3/4 mt-8">
        <div
          style={{ height: '300px' }}
          className="bg-white border-2 border-gray-200"
        />
      </div>
    </div>
    <ul className="flex border-b">
      <li className="mr-1 -mb-px">
        <a
          className="inline-block px-4 py-2 font-semibold text-gray-700 bg-white border-t border-l border-r rounded-t"
          href="#"
        >
          Tab 1
        </a>
      </li>
      <li className="mr-1">
        <a
          className="inline-block px-4 py-2 font-semibold text-gray-700 bg-white"
          href="#"
        >
          Tab 2
        </a>
      </li>
      <li className="mr-1">
        <a
          className="inline-block px-4 py-2 font-semibold text-gray-700 bg-white"
          href="#"
        >
          Tab 3
        </a>
      </li>
      <li className="mr-1">
        <a
          className="inline-block px-4 py-2 font-semibold text-gray-700 bg-white"
          href="#"
        >
          Tab 4
        </a>
      </li>
    </ul>
    <div className="mx-auto">
      <div
        style={{ height: '300px' }}
        className="bg-white border-2 border-t-0 border-gray-200"
      />
    </div>
  </Layout>
)

export default withApollo(Profile)
