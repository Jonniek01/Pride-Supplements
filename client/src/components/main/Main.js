import './Main.css';

import React from 'react'
import Navbar from '../navbar/Navbar'
import CarouselRender from './carousel/CarouselRender';
import Footer from '../footer/Footer'
import Products from '../products/Products'

function Main() {
  return (
    <div className='main'>
        <Navbar/>
        <CarouselRender/>
        <Products/>
        <Footer/>

    </div>
  )
}

export default Main