import React from 'react'
import { Footer } from '../components/FooterHome'
import { Middle } from '../components/Middle'
import { Sliding } from '../components/slider'
import { Year } from '../components/Year'

const HomePage = () => {
  return (
    <>
    <Middle/>
    <Sliding/>
    <Year/>
    <Footer/>
    </>
  )
}

export default HomePage