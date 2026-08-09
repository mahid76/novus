import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Container from '../Layout/Container'

const MainRoute = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainRoute
