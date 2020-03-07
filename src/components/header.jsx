import Link from 'next/link'
import { ReactComponent as NotificationImg } from '../../public/notification.svg'
import { ReactComponent as SearchImg } from '../../public/search.svg'
import { ReactComponent as EditImg } from '../../public/edit.svg'
import { ReactComponent as AppwishLogoImg } from '../../public/appwish.svg'

const AddWishButton = ({ className }) => {
  const concatenatedClassName = `px-8 py-1 text-gray-700 text-lg border hover:border-gray-500 cursor-pointer ${className}`
  return (
    <Link href="/new">
      <div className={concatenatedClassName} type="button">
        <EditImg className="inline mr-4 text-gray-700 fill-current" />
        <span className="text-xs font-bold">Wish</span>
      </div>
    </Link>
  )
}

const Header = () => {
  return (
    <div className="bg-white shadow">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 py-4">
          <Link href="/">
            <div className="cursor-pointer">
              <AppwishLogoImg className="inline" />
              <h3 className="inline font-bold text-gray-700"> Appwish</h3>
            </div>
          </Link>
          <div className="flex items-center">
            <AddWishButton className="mr-4" />
            <SearchImg
              onClick={() => alert('Search input should be displayed')}
              className="w-5 h-5 mr-4 cursor-pointer"
            />
            <NotificationImg
              onClick={() => alert('Notifications should be displayed')}
              className="w-5 h-5 mr-4 cursor-pointer "
            />
            <Link href="/profile">
              <img className="h-10 cursor-pointer" src="/hero.png"  alt="user_profile"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
