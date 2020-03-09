/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'

import withApollo from '../lib/apollo'
import Layout from '../components/layout'
import { ReactComponent as LikeImg } from '../../public/heart.svg'

const activeTab = "inline-block px-4 py-2 font-semibold text-gray-700 bg-white  border-t border-l border-r rounded-t  "
const inactiveTab = "inline-block px-4 py-2 font-semibold text-gray-700 bg-white"



const ActiveLink = ({ children, href, className }) => {
  return (
    <Link href={href} scroll={false} >
      <a        className={className}   >
        {children}
      </a>
      </Link>
  );
};



const WishDetails = ({children, currentPath  }) => (
  <Layout>
    <div className="flex">
      <div className="w-9/12 mt-8 mr-4">
        <div
          style={{ height: '450px' }}
          className="overflow-auto bg-white border-2 border-gray-200"
        >
          <h2 className="p-4 font-bold">Some Wish Title</h2>
          <img src="/app_design.jpg" alt="sample" className="object-center mx-auto "/>
        </div>
      </div>
      <div className="w-1/4 mt-8 ml-auto">
        <div
          style={{ height: '450px' }}
          className="bg-white border-2 border-gray-200"
        >
          <div className="flex justify-between px-4 py-2 ">
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
          <div className="h-40" />

          <div className="bottom-0 px-4 py-2 border-t ">
            <p className="inline-flex px-4 text-gray-600 cursor-pointer hover:text-gray-900"> Like  </p>|
            <p className="inline-flex px-4 text-gray-600 cursor-pointer hover:text-gray-900"> Save  </p>|
            <p className="inline-flex px-4 text-gray-600 cursor-pointer hover:text-gray-900"> Share  </p>

          </div>
        </div>
      </div>
    </div>

      <div
      className="flex mt-6 overflow-x-auto border-b scrollbar-none"
    >
      <ActiveLink href="/wish/description" className={  `${currentPath === "/wish/description"? activeTab : inactiveTab}`} > Description</ActiveLink>
      <ActiveLink href="/wish/comments" className={`${currentPath === "/wish/comments" ? activeTab : inactiveTab}`}> Comments</ActiveLink>
      <ActiveLink href="/wish/developers" className={`${currentPath === "/wish/developers" ? activeTab : inactiveTab}`}> Developers</ActiveLink>
      <ActiveLink href="/wish/others" className={`${currentPath === "/wish/others" ? activeTab : inactiveTab}`}> Others</ActiveLink>

    </div>



        <div
          style={{ height: '300px' }}
          className="overflow-auto bg-white border-2 border-t-0 border-gray-200 -z-10">
{children}
          </div>

  </Layout>
)

export default withApollo(WishDetails)
