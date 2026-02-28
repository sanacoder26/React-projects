import React from 'react'
import ShopHero from '../components/ShopHero'
import ShopCard from '../components/ShopCard'
import '../App.css'
import Footer from '../utils/Footer'

const Shop = () => {
  return (
    <div>
      <ShopHero/>
      <ShopCard/>
      <Footer/>
    </div>
  )
}

export default Shop
