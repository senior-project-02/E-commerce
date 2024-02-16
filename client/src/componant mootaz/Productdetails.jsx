import React from 'react'
import Detailsproduct from "./Detailsproduct.jsx";
import Productimage from "./Productimage.jsx";
import Productname from "./Productname.jsx";
import Relatedproduct from "./Relatedproduct.jsx";
import Nav from '../Aymen/Nav.jsx'
import Footer from  '../Aymen/Footer.jsx';
function Productdetails() {
  return (
    <div>
      <Nav/>
      <div className='mt-10'>
      <Productname />
      </div>
         
      <div className="flex w-full h-[600px] justify-center items-center">
        <Productimage />
        <Detailsproduct />
      </div>
      <div className=" flex justify-start mx-60 mt-24">
        <Relatedproduct/>
      </div>
      <Footer/>
    </div>
  )
}

export default Productdetails
