import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Offers from '../../Components/Offers/Offers'
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
  return (
    <>
        <Navbar />
        <h1>Home</h1>
        <Offers />
        <Footer />
    </>
  )
}

export default Home