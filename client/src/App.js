import './App.css';
import Navbar from './components/landing/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './components/products/Products'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
