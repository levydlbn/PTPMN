import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Banner from '../components/homeComponent/Banner'
import HomeContent from '../components/homeComponent/HomeContent'
import Navbar from '../components/Navbar'

const HomeScreen = () => {
  return (
    <>
        <Header />
        <Navbar />
        <div style={{paddingTop: 190}} className='home_body'>
          <Banner/>
          <HomeContent/>
        </div>
        <Footer />
    </>
  )
}

export default HomeScreen