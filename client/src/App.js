import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Admin from './components/admin/Admin';
import FMS from './components/FMS/FMS';
import Cart from './components/cart/Cart';
import Account from './components/Account/Account';
import Sequel from './components/sequel/Sequel';
import ProductPage from './components/products/productPage/ProductPage';
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, } from "react-redux";
import { changeProduct } from "./redux/slices/productSlice";


function App() {
  const dispatch = useDispatch();
  const url=`http://localhost:8080/1/9`
  const getProducts= axios.get(url)
  useEffect(()=>{
    dispatch(changeProduct([]));
    getProducts.then((response)=>{
      dispatch(changeProduct(response.data))  
    })
    .catch((err)=>{
      console.log(err)

    });;


  })

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/fms' element={<FMS/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/account' element={<Account/>} />
        <Route path='/sequel' element={<Sequel/>}/>
        <Route path='/products/:id' element={<ProductPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
