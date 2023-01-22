import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Hero } from '@/components/Hero/Hero'
import Slider from '@/components/Slider/Slider'
import { SliderData } from '@/components/Slider/SliderData'
import Instagram from '@/components/Instagram/Instagram'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Photography Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Captur Photography' message='I capture moment in nature and keep them alive.'/>
      <Slider slides={SliderData} />
      <Instagram />
    </>
  )
}
