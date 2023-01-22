import { Hero } from '@/components/Hero/Hero'
import Portfolio from '@/components/Portfolio/Portfolio'
import React from 'react'

const portfolio = () => {
  return (
    <div>
        <Hero heading='My work' message='This is some of my recent work travelling the world.'/>
        <Portfolio />
    </div>
  )
}

export default portfolio