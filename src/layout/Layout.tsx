import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'

function Layout() {
  return (
    <React.Fragment>
        <Navbar />
        <Outlet />
        <Footer />
    </React.Fragment>
  )
}

export default Layout