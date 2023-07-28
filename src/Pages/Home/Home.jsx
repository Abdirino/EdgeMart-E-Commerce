import React from 'react'
import './home.css'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import HSlider from '../../Components/HomeSlider/HSlider'
import News from '../../Components/NewsLetter/News'

const Home = () => {
  return (
    <>
        <Navbar />
        <HSlider />
        <News />
        <Footer />
    </>
  )
}

export default Home