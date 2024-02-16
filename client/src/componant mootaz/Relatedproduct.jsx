import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Relatedproduct() {
  const [product,setProduct]=useState([])
  useEffect(() => {
    axios.get(`http://localhost:8000/cart/someproduct/3`).then((res) => {
      setProduct(res.data.slice(0,3));
      console.log(res.data)
    });
  }, [])
  return (
    <div className="w-96 h-96 flex-row  gap-14 mb-32">
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
              <div className="w-5 h-10 bg-red-500 rounded" />
            </div>
            <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Related Item</div>
          </div>
          <div className='flex justify-start items-center gap-8 mt-8'>

          
    {
      product.map((e,i)=>{
        return(
          
          <div className=" flex gap-28">
            <div className="flex-col justify-center items-center gap-4 inline-flex">
              <div className="w-[300px] h-[300px] p-5 bg-neutral-100 rounded">
                <div className="px-3 py-1 left-[12px] top-[12px]  bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                  <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-none">-40%</div>
                </div>
                <br />
                <div className=" w-full h-full px-2 left-[40px] top-[35px]  justify-center items-center inline-flex">
                  <img className="w-[300px] h-44" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsZbi1hr5ssKViJ3R9axUCR-nU24C6UUGag&usqp=CAU" />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="text-black text-base font-medium font-['Poppins'] leading-normal">HAVIT HV-G92 Gamepad</div>
                <div className="justify-start items-start gap-3 inline-flex">
                  <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$120</div>
                  <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">$160</div>
                </div>
                <div className="justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-start flex" />
                  <div className="w-20 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-tight"><h1 className='flex'>Review (88)</h1></div>
                </div>
              </div>
            </div>
          </div>
        
        )
      })
    }
    </div>
    </div>
  )
}

export default Relatedproduct
