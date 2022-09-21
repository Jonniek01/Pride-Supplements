import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';
import { FcBusinesswoman } from 'react-icons/fc';
import axios from "axios";
import { useDispatch, } from "react-redux";
import { changeProduct } from "../../redux/slices/productSlice";






function Navbar() {
  const dispatch = useDispatch();
  const url=`http://localhost:8080/1/9`
  const getProducts= axios.get(url)

  const reset=()=>{
    dispatch(changeProduct([]));
    getProducts.then((response)=>{
      dispatch(changeProduct(response.data))  
    })
    .catch((err)=>{
      console.log(err)

    });;


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
      <Link className='acc' to='/account'>
        <FcBusinesswoman/>
      </Link>

      </div>

    </div>
  )
}

export default Navbar