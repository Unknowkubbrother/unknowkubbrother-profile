import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'

function Layout() {
  return (
    <React.Fragment>
        <Navbar />
        <Outlet />
    </React.Fragment>
  )
}

export default Layout