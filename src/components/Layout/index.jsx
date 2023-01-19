import React from 'react'
import Header from './Header'
import Footer from './Footer'
function Layout(props) {
  return (
    <>
    <div className="flex flex-col container ">
        <Header />
        <div className="mt-auto flex-1">{props.children}</div>
    </div>
    <Footer />
    </>
  )
}

export default Layout
