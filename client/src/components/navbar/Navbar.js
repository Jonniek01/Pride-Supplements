import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';
import { FcBusinesswoman } from 'react-icons/fc';




function Navbar() {
  return (
    <div className='navbar'>
      <div className="shop">
        <Link to='/'>SHOP</Link>
      </div>
      <div className="about">
      <Link to='/about'>ABOUT US</Link>
 
      </div>
      <div className="search">
        <div className="search_container">
          <AiOutlineSearch/>
          <input type={'text'} placeholder='Search...'/>
        </div>
      </div>
      <Link to='/' className="logo">
        <div className="pride">PRIDE</div>
        <div className="supplements">SUPPLEMENTS</div>
      </Link>
      <div className="fms">
      <Link to='/fms'>FIND MY SUPPLEMENT</Link>
      </div>
      <div className="cart">
      <Link to='/cart'>
        <BsCartFill/>
      </Link>
      </div>
      <div className="account">
      <Link to='/account'>
        <FcBusinesswoman/>
      </Link>

      </div>

    </div>
  )
}

export default Navbar