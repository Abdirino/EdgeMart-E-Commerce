import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Offers from '../../Components/Offers/Offers'
import Navbar from '../../Components/Navbar/Navbar'
import HomeSlider from '../../Components/Slider/HomeSlider'

const Home = () => {
  return (
    <>
        <Navbar />
        <HomeSlider />
        <Offers />
        <Footer />
    </>
  )
}

export default Home