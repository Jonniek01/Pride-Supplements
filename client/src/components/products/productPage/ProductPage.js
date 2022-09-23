import React from 'react'
import axios from 'axios'
import './ProductPage.css'
import { useParams, Link } from "react-router-dom";
import { useState } from 'react';
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import { BsFillHeartFill } from 'react-icons/bs';
import StarRatings from 'react-star-ratings';
import { useDispatch, } from "react-redux";
import { changeCart } from "../../../redux/slices/cartSlice";
import { useSelector } from "react-redux";






function ProductPage() {
  const cart = useSelector((state) => state.cart);
  const [count, setCount]= useState(1)
  const [text, setText]= useState('ADD TO CART')
  const [color, setColor] =useState('black')

  let params = useParams();
  const dispatch = useDispatch();
  const addToCart=()=>{
    console.log(cart)
    let cart1=cart
    const data= {
      id:product._id,
      image:product.image,
      name:product.name,
      count:count,
      price:product.price,
    }
    if(cart.length===0){
      console.log("length",cart.length)
      cart1=[...cart1, data]

      dispatch(changeCart(cart1)) 
      setText('ADDED TO CART');
      setColor('red');
      alert('added')
    }
    else if(cart.some((item)=>{return item.id===product._id})){
      alert('exists')
   
        }
        else{
          cart1=[...cart1, data]
  
          dispatch(changeCart(cart1)) 
          setText('ADDED TO CART');
          setColor('red');
          alert('added')

        }

    console.log("state",cart)

  }




  const [product, setProduct]= useState(false)
        axios.get(`http://localhost:8080/${params.id}`).then(res=>{
          setProduct(res.data[0])
        }
        )
  

    return (
    <div className="product_page">
      <Navbar/>

      {
      product?
      <div>
      <div className="burner">
        <div className="burner_links">
          <Link to='/'>Home/</Link><Link to={'/'}>Products/</Link><Link to={`/products/${params.id}`}>{product.name}</Link>
        </div>
      </div>
      <div className="product_container">
      <div className="image">
        <img src={product.image} alt={product.name} /> 
        <div className="heart_icon">
        <BsFillHeartFill/>
        </div> 
          </div>  
          <div className="product_details">
            <div className="name">
              <p>{product.name}</p>
            </div>
            <div className="product_ratings">
            <StarRatings
            rating={2.403}
            starDimension="20px"
            starSpacing="6px"
            starRatedColor="rgb(145, 5, 145)"
             />


            </div>
            <div className="price">
              <p>Ksh. {product.price}</p>
            </div>
            <div className="product_description">
              <p>
                {product.description}
              </p>
            </div>
            <div className="add_cart">
              <div className="values">
                <button onClick={
                  ()=>{
                    setCount(count+1)
                  }
                }  className="rm">
                    +
                </button>
                <input onChange={(e)=>{
                  setCount(e.target.value)
                }} value={count} type={'number'} />
                <button onClick={()=>{
                  if(count>1){
                    setCount(count-1)
                  }
                }} className="add">
                    -
                </button>
              </div>
              <button onClick={()=>{addToCart()}} style={{backgroundColor:color}} className="add_action">{text}</button>
            </div>
            </div>    
      </div>

      
        </div>
      :
      <div>loading...</div>
    }
    <Footer/>
    </div>
  )
}

export default ProductPage