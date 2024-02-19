import 'boxicons'

import { Card, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = ["Product","Size", "Rating", "Quantity", "Price", "", ""];



const ProductList = () => {

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [products, setProducts] = useState([])
  const navigate = useNavigate();
  console.log('setData', products)
  useEffect(() => {
    axios.get(`http://localhost:8000/seller/AllProduct`).then((res) => {
      setProducts(res.data)
    })
      .catch((err) => {
        console.log('err when i want to fetch data of product', err)
      })
  }, [])


  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/seller/deleteProduct/${id}`)
  }
  const renderStars = (rating) => {

    const roundedRating = Math.round(rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} style={i < roundedRating ? styles.filledStar : styles.emptyStar}>
          ★
        </span>
      );
    }

    return stars;
  };
  const styles = {
    filledStar: {
      color: '#FFD700',
    },
    emptyStar: {
      color: '#ccc',
    },
    starRating: {
      marginTop: '10px',
    },
  }
  
    const [updatedProducts, setUpdatedProducts] = useState(products);
  
    const handleQuantityChange = (id, event) => {
      const { value } = event.target;
      
      const newProducts = [...updatedProducts];
      newProducts[index].quantityp = parseInt(value);
      setUpdatedProducts(newProducts);
  
      // Update quantity in backend
      axios.put(`http://localhost:8000/seller/manageStock/${id}`, { quantity: parseInt(value) })
        .then(response => {
          console.log('Quantity updated successfully');
        })
        .catch(error => {
          console.error('Error updating quantity:', error);
          // Reset the quantity in case of an error
          newProducts[index].quantityp = products[index].quantityp;
          setUpdatedProducts(newProducts);
        });
    };
  
  return (

    <Card className="h-full w-full " style={{ marginTop: "2%", overflowX: "auto" }}>
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
                  style={{ fontSize: "16px", fontfamily: 'Inter' }}
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
  {products.map((oneProduct, index) => {
    return (
      <tr key={oneProduct.namep}>
        <td className="p-4">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-black text-base font-normal font-['Poppins'] leading-normal"
            style={{ fontSize: "16px", fontfamily: 'Poppins' }}
          >
            {oneProduct.namep}
          </Typography>
        </td>
        <td className="p-4">
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
            style={{ fontSize: "16px", fontfamily: 'Poppins' }}
          >
            {oneProduct.sizep}
          </Typography>
        </td>
        <td className="p-4">
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
            style={{ fontSize: "16px", fontfamily: 'Poppins' }}
          >
            {renderStars(oneProduct.ratingp)}
          </Typography>
        </td>
        <td className="p-4">
          <input
            type="number"
            value={oneProduct.quantityp}
            onChange={(event) => handleQuantityChange(oneProduct.idproduct, event)}
            className="appearance-none block w-20 bg-white border border-gray-300 rounded-md py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:border-red-500"
          />
        </td>
        <td className="p-4">
          <input
            type="number"
            value={oneProduct.pricep}
            onChange={(e) => {
              // Handle quantity change if needed
            }}
            className="appearance-none block w-20 bg-white border border-gray-300 rounded-md py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:border-red-500"
          />
        </td>
        <td className="p-4">
          <Typography
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-medium"
            style={{ fontSize: "16px", fontfamily: 'Poppins' }}
          >
            <box-icon type='solid' name='edit-alt' onClick={() => { navigate(`/Seller/EditProduct?product=${encodeURIComponent(JSON.stringify(oneProduct))}`) }}></box-icon>
          </Typography>
        </td>
        <td className="p-4">
          <Typography
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-medium"
            style={{ fontSize: "16px", fontfamily: 'Poppins' }}
          >
            <box-icon name='trash' onClick={() => { deleteProduct(oneProduct.idproduct), window.location.reload() }} ></box-icon>
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