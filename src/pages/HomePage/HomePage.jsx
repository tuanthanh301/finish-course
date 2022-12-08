import React from 'react'
import HomeCard from '../../components/HomeSection/HomeCard'
import HomeHoliday from '../../components/HomeSection/HomeHoliday'
import HomeSection from '../../components/HomeSection/HomeSection'

const HomePage = () => {
  return <div>
    <HomeSection />
    <HomeHoliday />
    <HomeCard/>
  </div>
}

export default HomePage