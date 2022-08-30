import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Admin from './components/admin/Admin';
import FMS from './components/FMS/FMS';
import About from './components/about/About';
import Cart from './components/cart/Cart';
import Account from './components/Account/Account';
import Sequel from './components/sequel/Sequel';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/fms' element={<FMS/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/account' element={<Account/>} />
        <Route path='/sequel' element={<Sequel/>}/>
      </Routes>
    </div>
  );
}

export default App;
