import React from 'react'
import Nav from '../Components/Common/Nav'
import AdvertSection from '../Components/AdvertSection'
import CategSlider from '../Components/CategSlider'
import ComponentName from '../Components/ComponentName'
import Footer from '../Components/Footer'
import UserProfilSettings from '../Components/Profile/UserProfilSettings'

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <Nav/>
      <AdvertSection/>
      <ComponentName/>
      <Footer/>

    </div>
  )
}

export default Home