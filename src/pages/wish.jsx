import Link from 'next/link'
import withApollo from '../lib/apollo'
import Layout from '../components/layout'
import { ReactComponent as LikeImg } from '../../public/heart.svg'

const WishDetails = () => (
  <Layout>
    <div className="flex">
      <div className="w-9/12 mt-8 mr-4">
        <div
          style={{ height: '450px' }}
          className="bg-white border-2 border-gray-200"
        >
          <h2 className="p-4 font-bold">Some Wish Title</h2>
        </div>
      </div>
      <div className="w-1/4 mt-8 ml-auto">
        <div
          style={{ height: '450px' }}
          className="bg-white border-2 border-gray-200"
        >
          <div className="flex justify-between px-4 py-2">
            <h2 className="pt-2 font-bold ">Author</h2>
            <span>
              <Link href="/profile">
                <img className="h-10 cursor-pointer" src="/hero.png" alt="user_profile" />
              </Link>
            </span>
          </div>

          <p className="px-4 pt-4 pb-8 text-sm text-gray-700 ">Parables Boltnoel is never-giving-up spirited backend dev who loves thinkering with databases  ...  </p>
          <hr />
          <div className="px-8 pt-6">
          <div className="content-center self-center ml-auto mr-4">
          <LikeImg className="inline-block w-4 h-4 align-text-bottom" />
              <span className="pt-1 text-sm text-gray-800"> 17 likes</span>
          </div>
          <p className="pt-2 text-sm text-gray-800">173 community members</p>
          </div>
          <div className="bottom-0 ">
            Follow | Join Devs | Share
          </div>
        </div>
      </div>
    </div>
    <ul className="flex border-b">
      <li className="mr-1 -mb-px">
        <a
          className="inline-block px-4 py-2 font-semibold text-gray-700 bg-white border-t border-l border-r rounded-t"
          href="/"
        >
          Description
        </a>
      </li>
      <li className="mr-1">
        <a
          className="inline-block px-4 py-2 font-semibold text-gray-700 bg-white"
          href="/wish"
        >
          Comments
        </a>
      </li>
      <li className="mr-1">
        <a
          className="inline-block px-4 py-2 font-semibold text-gray-700 bg-white"
          href="/wish"
        >
          Developers
        </a>
      </li>
      <li className="mr-1">
        <a
          className="inline-block px-4 py-2 font-semibold text-gray-700 bg-white"
          href="/wish"
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

export default withApollo(WishDetails)
