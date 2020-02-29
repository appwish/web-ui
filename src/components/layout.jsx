import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = props => {
  return (
    <div>
      <Header />

    <div className="font-sans w-full min-h-screen m-0">
      <div className="container mx-auto">
    
      <div>{props.children}</div>
    </div>
    </div>
    <Footer />

    </div>

  )
}

export default Layout
