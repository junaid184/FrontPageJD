import React from 'react'
import Classs from "../Component/Layout.module.scss"
import Header from './Header'
import Footer from './footer';
const Layout = ({ children }) => {
  return (
    <div className={Classs.main}>
      <Header />
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout