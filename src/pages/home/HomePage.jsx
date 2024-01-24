import React from 'react'
import MainLayout from '../../componenets/MainLayout'
import Hero from './container/Hero'
import Articles from './container/Articles'
import CTA from './container/CTA'

const HomePage = () => {
  return (
    <MainLayout>
      <Hero/>
      <Articles/>
      <CTA/>
    </MainLayout>  )
}

export default HomePage
