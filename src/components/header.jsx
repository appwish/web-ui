/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link'
import GoogleLogin from 'react-google-login'
import { ReactComponent as NotificationImg } from '../../public/notification.svg'
import { ReactComponent as SearchImg } from '../../public/search.svg'
import { ReactComponent as EditImg } from '../../public/edit.svg'
import { ReactComponent as AppwishLogoImg } from '../../public/appwish.svg'

// TODO create separate sign in component and logic
const onSuccess = response => {
  console.log(response)
  localStorage.setItem('token', response.tokenId)
}

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
            <Link href="/demo">
              <img className="h-10 cursor-pointer" src="/hero.png"  alt="user_profile"/>
            </Link>
            <GoogleLogin
              clientId="986032261983-4c904q9r46ctji8h4k12lkgcc6n90cif.apps.googleusercontent.com"
              render={renderProps => (
                <div
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="px-4 py-2 text-lg text-gray-700 border cursor-pointer hover:border-gray-500"
                >
                  <span className="text-xs font-bold">Sign In</span>
                </div>
              )}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onSuccess}
              cookiePolicy='single_host_origin'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
