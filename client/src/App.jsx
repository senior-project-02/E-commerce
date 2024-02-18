
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Ahmed/Login';
import SignUp from './Ahmed/SignUp'
import Home from './Aymen/Home'
import Detailsproduct from './componant mootaz/Detailsproduct';
import ProductsList from './Seller/ProductsList'
import Seller from './Seller/SellerInterface';
import AddProduct from './Seller/AddProduct'
import EditProduct from './Seller/EditProduct'
import SideBar from './Admin/SideBar';
import AllTable from './Admin/AllTable';
import EdditRole from './Admin/EditRole';
import CategoryList from './Admin/Category';






function App() {
  return (
    <div>

      
      
<Router>
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/productDetails' element={<Detailsproduct/>}/>

      <Route path='/Login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/Seller' element={<Seller/>}/>
      <Route path='/Seller/AddProduct' element={<AddProduct/>}/>

      <Route path='/Seller/EditProduct' element={<EditProduct/>}/>
      <Route path='/Seller/ProductList' element={<Seller/>}/>
      
      <Route path='/Admin/All' element={<AllTable/>}/>
      <Route path='/Admin/EditRole' element={<EdditRole/>}/>
      <Route path='/Admin/CategoryList' element={<CategoryList/>}/>

     



      
      

      </Routes>
      </Router>

    </div>

  );
}

export default App

