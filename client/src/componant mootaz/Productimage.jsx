import React,{useState,useEffect} from "react";
import axios from "axios";
const Productimage = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8000/cart/image/1`).then((res) => {
      setImages(res.data);
      console.log(res.data)
    });
  }, [])
  
  return (
    <div className="flex justify-center items-center w-1/2">
        <div className="flex flex-col justify-between  mt-4 w-1/6">
        {images.slice(1).map((image, index) => (
            <div className="w-full m-2">
                <img key={index} src={image.imageurl} alt={`Small ${index}`} className="p-2 hover:scale-125" />
            </div> 
        ))}
      </div>
      <div className=" w-500 h-600   rounded-md">
      <div className=" w-446 h-315 left-27 top-154 bg-cover bg-center" >
        <img src={images[0].imageurl} className=" hover:scale-105 hover:mr-4 ml-5" alt="" />
      </div>
    </div>
      
    </div>
  );
};

export default Productimage;
