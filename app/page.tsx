import Image from 'next/image'
import HeroSection from './components/HeroSection'
import NavBar from './components/Navbar'
import Numbers from './components/Numbers'
import Stats from './components/Stats'
import WhatOffer from './components/WhatOffer'
import AboutUs from './components/AboutUs'
import Listings from './components/Listings'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Form from './components/Form'

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <HeroSection />
      <Stats />
      <h1 className='text-6xl text-center m-11 font-extrabold text-[#000000]'>We Offer</h1>
      <WhatOffer />
      <h1 className='text-6xl text-center m-11 font-extrabold text-[#000000]'>About Us</h1>
      {/* <Numbers  /> */}
      <AboutUs />
      <h1 className='text-6xl text-center m-11 font-extrabold text-[#000000]'>Listings</h1>
      <Listings />
      <h1 className='text-6xl text-center m-11 font-extrabold text-[#000000]'>Gallery</h1>
      <Gallery />
      <Form />

      <Footer />


      

      
    </main>
  )
}
