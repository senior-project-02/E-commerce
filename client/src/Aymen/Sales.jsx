import { IoMdHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CiStar } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";
// import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCountdown from "./time/ProductCountdown";
import React, { useEffect, useState } from "react";

function Sales() {
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  const [idp, setIdp] = useState(1);
  useEffect(() => {
    const Data = async () => {
      try {
        const pr = await axios.get("http://localhost:8000/user/allprodect");
        setProduct(pr.data.slice(0, 4));
        const array = [];
        for (const i of pr.data.slice(0, 4)) {
          await axios
            .get(`http://localhost:8000/cart/image/${i.idproduct}`)
            .then((res) => {
              array.push(res.data[0].imageurl);
            })
            .catch((err) => console.log(err));
        }
        console.log(array);
        setImages(array);
      } catch (err) {
        console.log(err);
      }
    };
    Data();
  }, []);
  const [wish, setWish] = useState(false);
  const addwishlist = async () => {
    const ob = {
      user_iduser: 1,
      product_idproduct: idp,
    };
    if (wish === false) {
      await axios
        .post("http://localhost:8000/cart/addwhis,ob")
        .then(() => {})
        .catch((err) => console.log(err));
    } else {
      await axios
        .delete("http://localhost:8000/cart/delwhis", { data: ob })
        .then(() => {})
        .catch((err) => console.log(err));
    }
    setWish((prev) => !prev);
  };
  console.log(product);
  console.log(images);
  return (
    <div
      style={{ display: "flex", marginTop: "10%", justifyContent: "center" }}
    >
      <div className=" flex-col justify-center items-start gap-10 inline-flex">
        <div className="justify-start items-end gap-[470px] inline-flex">
          <div className="justify-start items-end gap-[87px] flex">
            <div className="h-[103px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
                  <div className="w-5 h-10 bg-red-500 rounded"></div>
                </div>
                <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">
                  Today’s
                </div>
              </div>
              <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">
                Flash Sales
              </div>
            </div>
            {/* timer down */}
            <ProductCountdown />
          </div>
          {/* arrow left and right */}
          <div className="justify-start items-start gap-2 flex">
            <div className="w-[46px] h-[46px] relative">
              <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full"></div>
              <div className="w-6 h-6 px-1 py-[5px] left-[11px] top-[11px] absolute justify-center items-center inline-flex"></div>
            </div>
            <div className="w-[46px] h-[46px] relative">
              <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full"></div>
              <div className="w-6 h-6 pl-[3.50px] pr-1 py-[5px] left-[11px] top-[11px] absolute justify-center items-center inline-flex"></div>
            </div>
          </div>
        </div>
        <div className="w-[1308px] justify-start items-start gap-[30px] inline-flex">
          {/* the card of item */}
          {product.map((e, i) => {
            // eslint-disable-next-line react/jsx-key
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
                  <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
                      -{e.promop}%
                    </div>
                  </div>
                  <div className="w-[270px] h-[41px] left-0 top-[209px] absolute bg-black rounded-bl rounded-br"></div>
                  <div className="left-[87px] top-[217px] absolute text-white text-base font-medium font-['Poppins'] leading-normal">
                    Add To Cart
                  </div>
                  <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
                    <div className="w-[34px] h-[34px] relative">
                      <div className="w-[34px] h-[34px]  bg-white rounded-full flex justify-center items-center">
                        <button
                          onClick={() => {
                            addwishlist();
                            setIdp(e.idproduct);
                          }}
                        >
                          <FiHeart
                            className={
                              wish
                                ? "text-red-500 w-28 h-8"
                                : "text-black w-17 h-10"
                            }
                          />
                        </button>
                      </div>
                      <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex"></div>
                    </div>
                    <div className="w-[34px] h-[34px] relative">
                      <div className="w-[34px] h-[34px]  bg-white rounded-full flex justify-center items-center">
                        <IconContext.Provider value={{ size: "1.5em" }}>
                          <FaEye />
                        </IconContext.Provider>
                      </div>
                      <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                        <div className="w-[19.23px] h-3.5 relative"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[190px] h-[180px] pt-10 pb-[39px] left-[40px] top-[15px] absolute justify-center items-center inline-flex">
                    <img
                      className="w-[191px] h-[101px]"
                      src={images[i]}
                    />
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                    {e.namep}
                  </div>
                  <div className="justify-start items-start gap-3 inline-flex">
                    <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">
                    {e.pricep-(e.pricep*e.promop/100)}
                    </div>
                    <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">
        
                      {e.pricep}
                    </div>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <div className="justify-start items-start flex">
                      <CiStar /> <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>
                    <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">
                      ({e.ratingp})
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Sales;
