import './Main.css';

import React from 'react'
import Navbar from '../navbar/Navbar'
import Carousel from './carousel/Carousel'
import Footer from '../footer/Footer'
import Products from '../products/Products'

function Main() {
  return (
    <div className='main'>
        <Navbar/>
        <Carousel/>
        <Products/>
        <Footer/>

    </div>
  )
}

export default Main