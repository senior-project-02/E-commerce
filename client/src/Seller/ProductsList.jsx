import 'boxicons'

import { Card, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const TABLE_HEAD = ["Product", "Sales", "Rating","Quantity", "Price","",""];
 

 
const  ProductList=()=> {
  
    const [products,setProducts]=useState([])
    const navigate = useNavigate();
    console.log('setData',products)
    useEffect(()=>{
        axios.get(`http://localhost:8000/seller/AllProduct`).then((res)=>{
            setProducts(res.data)
        })
        .catch((err)=>{
            console.log('err when i want to fetch data of product',err)
        })
    },[])

    const deleteProduct=(id)=>{
      axios.delete(`http://localhost:8000/seller/deleteProduct/${id}`)
    }
  return (
    
    <Card className="h-full w-full "style={{ marginTop: "2%", overflowX: "auto" }}>
      <table className="w-full min-w-max table-auto text-left">
        <thead class="text-xs text-white uppercase bg-black dark:bg-black dark:text-white-400">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="text-white text-2xl font-bold font-['Inter'] leading-normal tracking-wide"
                  style={{ fontSize: "16px",fontfamily: 'Inter' }}
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((oneProduct, index) => {
            const isLast =2;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={oneProduct.namep}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-black text-base font-normal font-['Poppins'] leading-normal"
                    style={{ fontSize: "16px",fontfamily: 'Poppins' }}
                  >
                    {oneProduct.namep}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    style={{ fontSize: "16px" ,fontfamily: 'Poppins'}}
                  >
                    {""}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    style={{ fontSize: "16px" ,fontfamily: 'Poppins'}}
                  >
                    {oneProduct.ratingp}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    style={{ fontSize: "16px" ,fontfamily: 'Poppins'}}
                  >
                    {oneProduct.quantityp}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    style={{ fontSize: "16px" ,fontfamily: 'Poppins'}}
                  >
                    {oneProduct.pricep}
                  </Typography>
                </td>
                
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                    style={{ fontSize: "16px" ,fontfamily: 'Poppins' }}
                  >
                    <box-icon type='solid' name='edit-alt' onClick={()=>{navigate(`/Seller/EditProduct?product=${encodeURIComponent(JSON.stringify(oneProduct))}`)}}></box-icon>
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                    style={{ fontSize: "16px" ,fontfamily: 'Poppins'}}
                  >
                    <box-icon name='trash' onClick={() => {deleteProduct(oneProduct.idproduct),window.location.reload()} } ></box-icon>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
export default ProductList