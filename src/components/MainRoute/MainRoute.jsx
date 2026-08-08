import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Container from '../Layout/Container'

const MainRoute = () => {
  return (
    <div>
     <Container>

      <Navbar />
     </Container>
      <Outlet />
    </div>
  )
}

export default MainRoute
