import React from 'react'
import axios from 'axios'
import './ProductPage.css'
import { useParams } from "react-router-dom";
import { useState } from 'react';


function ProductPage() {
  let params = useParams();
  const [product, setProduct]= useState(false)
        axios.get(`http://localhost:8080/${params.id}`).then(res=>{
          setProduct(res.data[0])
        }
        )

    return (
    <div>{
      product?
      <div>{product.name}</div>
      :
      <div>loading...</div>
    }
    </div>
  )
}

export default ProductPage