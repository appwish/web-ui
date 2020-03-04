import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="font-sans w-full min-h-screen m-0">
        <div className="container mx-auto">
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
