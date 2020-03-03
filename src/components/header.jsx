import Link from 'next/link'
import { ReactComponent as NotificationImg } from '../../public/notification.svg'
import { ReactComponent as SearchImg } from '../../public/search.svg'
import { ReactComponent as EditImg } from '../../public/edit.svg'
import { ReactComponent as AppwishLogoImg } from '../../public/appwish.svg'

const AddWishButton = ({ className }) => {
  const concatenatedClassName = `px-4 py-2 text-gray-700 text-lg border hover:border-gray-500 cursor-pointer ${className}`
  return (
    <Link href="/new">
      <div className={concatenatedClassName} type="button">
        <EditImg className="inline mr-4 text-gray-700 fill-current" />
        <span className="font-bold text-xs">Wish</span>
      </div>
    </Link>
  )
}

const Header = () => {
  return (
    <div className="bg-white shadow">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 h-16">
          <Link href="/">
            <div className="cursor-pointer">
              <AppwishLogoImg className="inline" />
              <h3 className="inline text-gray-700 font-bold"> Appwish</h3>
            </div>
          </Link>
          <div className="flex items-center">
            <AddWishButton className="mr-4" />
            <SearchImg
              onClick={() => alert('Search input should be displayed')}
              className="mr-4 cursor-pointer"
            />
            <NotificationImg
              onClick={() => alert('Notifications should be displayed')}
              className="mr-4 cursor-pointer"
            />
            <Link href="/profile">
              <img className="h-10 cursor-pointer" src="/hero.png" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
