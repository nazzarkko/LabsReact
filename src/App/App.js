import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Header/Hero.js';
import Footer from './Footer/Footer.js';
import Home from '../Home/Home.js';
import Catalog from '../Home/Components_Home/Catalog/Catalog.js'; 
import AircraftItem from '../Home/AircraftItem/AircraftItem.js';
import Cart from './Header/Components_Header/Basket/Redux/Cart.js';
import "../App/App.css";
import SuccessPage from './Registration/SuccessPage.js';
import CheckoutPage from './Registration/ChekoutPage.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Hero/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/aircraft/:model" element={<AircraftItem />} />
          <Route path ="/cart" element ={<Cart/>} />
          <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}


export default App;
