import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'

const HomePage = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Hero />
      <HomeCards />
    </div>
  )
}

export default HomePage