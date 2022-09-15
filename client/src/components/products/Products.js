import React from 'react'
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProduct } from "../../redux/slices/productSlice";
import Product from './product/Product';

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const url=`http://localhost:8080/1/6`
  const getProducts= axios.get(url)



  useEffect(()=>{
    dispatch(changeProduct([]));
    getProducts.then((response)=>{
      dispatch(changeProduct(response.data))  
    })
    .catch((err)=>{
      console.log(err)

    });;


  }, [])



  return (
    <div id='products'>
      {
        products.map((product)=>{
          return <Product product={product}/>
        })
      }
      
    </div>
  )
}

export default Products