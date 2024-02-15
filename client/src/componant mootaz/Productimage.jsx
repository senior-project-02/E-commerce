import React from "react";

const Productimage = () => {
  const bigImage = "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/d/q/dqd_1.jpg";
  const smallImages = [
    "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/d/q/dqd_1.jpg",
    "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/d/q/dqd_1.jpg",
    "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/d/q/dqd_1.jpg",
    "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/d/q/dqd_1.jpg"
  ];

  return (
    <div className="flex justify-center items-center">
        <div className="flex flex-col justify-between h-600 mt-4 w-[200px]">
        {smallImages.map((image, index) => (
            <div className="w-[160px] m-2">
                <img key={index} src={image} alt={`Small ${index}`} className="p-2 hover:scale-125" />
            </div> 
        ))}
      </div>
      <div className=" w-500 h-600  bg-gray-200 rounded-md">
      <div className=" w-446 h-315 left-27 top-154 bg-cover bg-center" >
        <img src={bigImage} className=" hover:scale-105 hover:mr-4" alt="" />
      </div>
    </div>
      
    </div>
  );
};

export default Productimage;
