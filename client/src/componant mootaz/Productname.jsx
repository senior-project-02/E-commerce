import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function Productname() {
  const [product, setProduct] = useState({});
  const [namecat, setNamecat] = useState("");
  const { id } = useParams()
  useEffect(() => {
    const Data = async () => {
      try {
        const productres = await axios.get(
          `http://localhost:8000/cart/oneproduct/${id}`
        );
        setProduct(productres.data[0]);

        const gat = await axios.get(
          `http://localhost:8000/cart/namegategorie/${productres.data[0].category_idcategory}`
        );
        setNamecat(gat.data[0].name);
      } catch (err) {
        console.error(err);
      }
    };

    Data();
  }, []);

  return (
    <div className="text-black mx-60 h-10 text-lg justify-start items-center gap-4 flex">
      <div className="opacity-50 font-normal font-['Poppins'] leading-tight">
        Account
      </div>
      <div className="w-4 h-px  rotate-[117.05deg] opacity-50 border border-black"></div>
      <div className="opacity-50  font-normal font-['Poppins']">{namecat}</div>
      <div className="w-4 h-px  rotate-[117.05deg] opacity-50 border border-black"></div>
      <div className=" font-normal font-['Poppins']">{product.namep}</div>

    </div>
  );
}

export default Productname;
