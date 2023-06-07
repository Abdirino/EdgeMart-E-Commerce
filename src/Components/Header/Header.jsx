import React from 'react'
import './header.css'
import Head from '../Head/Head'
import Search from '../Search/Search'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <>
        <Head />
        <Search />
        <Navbar />
    </>
  )
}

export default Header