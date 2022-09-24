import React from 'react'
import './Navbar.css'
import { Link, Navigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';
import { FcBusinesswoman } from 'react-icons/fc';
import axios from "axios";
import { useDispatch, } from "react-redux";
import { changeProduct } from "../../redux/slices/productSlice";
import { useState } from 'react';

function Navbar() {
  const dispatch = useDispatch();
  const url=`http://localhost:8080/1/9`
  const [search, setSearch] = useState("");
  const getProducts= axios.get(url)


  const reset=()=>{
    getProducts.then((response)=>{
      dispatch(changeProduct(response.data))  
    })
    .catch((err)=>{
      console.log(err)

    });;


  }
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      console.log(search)
      console.log('Enter key pressed ✅');
      const url=`http://localhost:8080/products/search/${search}`
      axios.get(url).then((response)=>{
        dispatch(changeProduct(response.data)) 
      })
      .catch((err)=>{
        console.log(err)
  
      });;
      Navigate('/') 

  
    }
  }
  return (
    <div className='navbar'>
      <div className="shop">
        <Link onClick={()=>{reset()}} to='/'>SHOP</Link>
      </div>
      <div className="about">
      <a href='#about'>ABOUT US</a>
 
      </div>
      <div className="search">
        <div className="search_container">
          <AiOutlineSearch/>
          <input
          onKeyDown={handleKeyDown}
           onChange={(e) => {
            setSearch(e.target.value)
        }} type={'text'} placeholder='Search...'/>
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
      <Link className='acc' to='/account'>
        <FcBusinesswoman/>
      </Link>

      </div>

    </div>
  )
}

export default Navbar