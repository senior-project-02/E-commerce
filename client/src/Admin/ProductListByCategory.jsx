import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const ProductListByCategory = () => {
  const [products, setProducts] = useState([]);
  console.log(products)
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idcategory = queryParams.get('categoryId')
console.log('hii',idcategory)
useEffect(() => {
    if (idcategory) {
      axios.get(`http://localhost:8000/admin/ProductInThatCategory/${idcategory}`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log('Error fetching products:', err);
        });
    }
  }, [idcategory]);

  return (
    
    <div className="container mx-auto">
        
      <h2 className="text-2xl font-bold mb-4">Products in Category</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2">{product.description}</td>
                <td className="border px-4 py-2">
                  {/* Add actions for each product */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductListByCategory;