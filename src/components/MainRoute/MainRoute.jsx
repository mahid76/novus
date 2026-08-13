import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Container from '../Layout/Container'
import Footer from '../Footer/Footer'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const MainRoute = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainRoute
