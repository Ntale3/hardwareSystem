import React from 'react'
import Nav from '../Components/Common/Nav'
import AdvertSection from '../Components/AdvertSection'
import CategSlider from '../Components/CategSlider'
import ComponentName from '../Components/ComponentName'
import Footer from '../Components/Common/Footer'
import UserProfilSettings from './UserProfilSettings'

const Home = () => {
  return (
    <div className='bg-gray-100'>      
      <AdvertSection/>
      <ComponentName/>
    </div>
  )
}

export default Home