import React from 'react'
import Banner from '../components/Banner/Banner'
import Container from '../components/Layout/Container'
import Divisions from '../components/Divisions/Divisions'
import WhyNovus from '../components/WhyNovus/WhyNovus'
import Reviews from '../components/Reviews/Reviews'
import CtaBand from '../components/CtaBand/CtaBand'

const Home = () => {
  return (
    <div>
      <Banner />
      <Divisions />
      <WhyNovus />
      <Reviews />
      <CtaBand />
    </div>
  )
}

export default Home
