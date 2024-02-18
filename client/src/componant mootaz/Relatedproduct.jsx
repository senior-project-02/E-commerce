import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom';

function Relatedproduct() {
  const [product,setProduct]=useState([])
  const [images,setImages]=useState([])
  const {id1} = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    const Data=async()=>{
      try{
        const pr= await axios.get(`http://localhost:8000/cart/someproduct/${id1}`)
        setProduct(pr.data.slice(0,4));
        const array=[]
        for (const i of pr.data.slice(0,4)) {
          await axios.get(`http://localhost:8000/cart/image/${i.idproduct}`)
          .then((res) => {
            array.push(res.data[0].imageurl); 
          })
          .catch((err) => console.log(err));
        }
        console.log(array);
        setImages(array)
        
      }catch(err){
        console.log(err);
      }
    }
    Data();
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
          <div key={i} className=" flex gap-28" onClick={()=>{
            navigate(`/product/${id1}/${e.idproduct}`)}} >
            <div className="flex-col justify-center items-center gap-4 inline-flex">
              <div className="w-[300px] h-[300px] p-5 bg-neutral-100 rounded">
                <div className="px-3 py-1 left-[12px] top-[12px]  bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                  <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-none">-{e.promop}%</div>
                </div>
                <br />
                <div className=" w-full h-full px-2 left-[40px] top-[35px]  justify-center items-center inline-flex">
                  <img className="w-[300px] h-44" src={images[i]} alt="" />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="text-black text-base font-medium font-['Poppins'] leading-normal">{e.namep}</div>
                <div className="justify-start items-start gap-3 inline-flex">
                  <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">${e.pricep-(e.pricep * e.promop)}</div>
                  <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">${e.pricep}</div>
                </div>
                <div className="justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-start flex" />
                  <div className="w-20 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-tight"><h1 className='flex'>Review ({e.ratingp})</h1></div>
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
