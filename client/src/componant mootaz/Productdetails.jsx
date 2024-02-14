import React from 'react'
import Detailsproduct from "./Detailsproduct.jsx";
import Productimage from "./Productimage.jsx";
import Productname from "./Productname.jsx";
import Relatedproduct from "./Relatedproduct.jsx";

function Productdetails() {
  return (
    <div>
         <Productname />
      <div className="flex w-full h-[800px] justify-center items-center">
        <Productimage />
        <Detailsproduct />
      </div>
      <div className=" flex justify-start mx-60 mt-24">
        <Relatedproduct/>
      </div>
    </div>
  )
}

export default Productdetails
