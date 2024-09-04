import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/pages/Footer'
import Navbar from './components/pages/Navbar'

const Layout = () => {
  return (
    <div>
      <>
      <Navbar/>
       <Outlet/>
       <Footer/>
      </>
    </div>
  )
}

export default Layout
