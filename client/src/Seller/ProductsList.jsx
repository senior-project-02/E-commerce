import 'boxicons'
import { Card, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import axios from 'axios'
const TABLE_HEAD = ["Product", "Sales", "Rating","Quantity", "Price","",""];
 

 
const  ProductList=()=> {
    const [products,setProducts]=useState([])
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
    
    <Card className="h-full w-full overflow-scroll">
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
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map(({ idproduct,namep, quantityp, pricep,ratingp }, index) => {
            const isLast =2;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={namep}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {namep}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {""}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {ratingp}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {quantityp}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {pricep}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    <box-icon type='solid' name='edit-alt'></box-icon>
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    <box-icon name='trash' onClick={() => {deleteProduct(idproduct),window.location.reload()} } ></box-icon>
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