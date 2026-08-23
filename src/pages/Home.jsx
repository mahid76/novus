import React from 'react'
import { Helmet } from "react-helmet-async";
import Banner from '../components/Banner/Banner'
import Container from '../components/Layout/Container'
import Divisions from '../components/Divisions/Divisions'
import WhyNovus from '../components/WhyNovus/WhyNovus'
import Reviews from '../components/Reviews/Reviews'
import CtaBand from '../components/CtaBand/CtaBand'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Novus Group | Advisory, Tax, Overseas & Translation Services in Bangladesh</title>
        <meta
          name="description"
          content="Novus Group is a Bangladesh-based professional group offering financial advisory, tax & VAT compliance, overseas education consultancy, and certified translation services."
        />
      </Helmet>
      <Banner />
      <Divisions />
      <WhyNovus />
      <Reviews />
      <CtaBand />
    </div>
  )
}

export default Home