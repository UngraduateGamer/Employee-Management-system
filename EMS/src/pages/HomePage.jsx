import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import OurFeatures from '../components/OurFeatures'
import EMS_Cards from '../components/EMS_Cards'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='bg-[#f7f5e6] w-full h-screen overflow-x-hidden'>
        <Navbar/>
        <HeroSection/>
        <OurFeatures/>
        <EMS_Cards/>
        <Footer/>
    </div>
  )
}

export default HomePage