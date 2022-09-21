import React from 'react'
import axios from 'axios'
import './ProductPage.css'
import { useParams, Link } from "react-router-dom";
import { useState } from 'react';
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import { BsFillHeartFill } from 'react-icons/bs';
import StarRatings from 'react-star-ratings';




function ProductPage() {
  let params = useParams();
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
                <button className="rm">
                    +
                </button>
                <input type={'number'} />
                <button className="add">
                    -
                </button>
              </div>
              <button className="add_action">ADD TO CART</button>
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