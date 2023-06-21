import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Offers from '../../Components/Offers/Offers'
import Navbar from '../../Components/Navbar/Navbar'
import HSlider from '../../Components/HomeSlider/HSlider'

const Home = () => {
  return (
    <>
        <Navbar />
        <HSlider />
        <Offers />
        <Footer />
    </>
  )
}

export default Home