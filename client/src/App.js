import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store/store";
import Main from './components/main/Main';
import Admin from './components/admin/Admin';
import FMS from './components/FMS/FMS';
import Cart from './components/cart/Cart';
import Account from './components/Account/Account';
import Sequel from './components/sequel/Sequel';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/fms' element={<FMS/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/account' element={<Account/>} />
        <Route path='/sequel' element={<Sequel/>}/>
      </Routes>
      </Provider>

    </div>
  );
}

export default App;
