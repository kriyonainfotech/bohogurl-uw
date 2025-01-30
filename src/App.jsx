import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Collections from './Component/Collections';
import Product from './Component/Product';
import Home from './Component/Home';
import Login from './Component/Login';
import Cart from './Component/Cart';
import Orderinfo from './Component/Orderinfo';
import Profile from './Component/Profile';
import ProductDetails from './Component/productdetails';  // Import ProductDetails
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';  // Adjust the path if necessary
import AdminLogin from './Component/AdminLogin';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/orderinfo" element={<Orderinfo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product-details" element={<ProductDetails />} /> {/* Added ProductDetails route */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
