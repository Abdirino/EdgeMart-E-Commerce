import React from 'react'
import './home.css'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import HSlider from '../../Components/HomeSlider/HSlider'

const Home = () => {
  return (
    <>
        <Navbar />
        <HSlider />
        <Footer />
    </>
  )
}

export default Home