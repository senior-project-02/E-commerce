import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Ahmed/Login';
import SignUp from './Ahmed/SignUp'
import Home from './Aymen/Home'
import Detailsproduct from './componant mootaz/Detailsproduct';
import ProductsList from './Seller/ProductsList'
import Dashboard from './Seller/SellerInterface';
import AddProduct from './Seller/AddProduct'
import EditProduct from './Seller/EditProduct'





function App() {
  return (
    <div>

<Router>
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/productDetails' element={<Detailsproduct/>}/>
      
      <Route path='/Login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/Seller' element={<Dashboard/>}/>
      <Route path='/Seller/AddProduct' element={<AddProduct/>}/>
      <Route path='/Seller/EditProduct' element={<EditProduct/>}/>
      <Route path='/Seller/ProductList' element={<Dashboard/>}/>
      
      
      </Routes>
      </Router>

    </div>

  );
}

export default App