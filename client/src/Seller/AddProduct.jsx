import axios from "axios";
import React, { useEffect, useState } from "react";

const AddProduct=()=>{
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [size,setSize]=useState('')
    const [quantity,setQuantity]=useState(0)
    const [price,setPrice]=useState(0)
    const [promotion,setPromotion]=useState(0)
    const [category,setCategory]=useState('')
    const [idCategory,setIdCategory]=useState(0)
    const [AllCategory,setAllCategory]=useState([])

    useEffect(()=>{
     axios.get(`http://localhost:8000/admin/getAllCategory`).then((res)=>{
        setAllCategory(res.data)
     })
     .catch((err)=>{
        console.log('err when i want to fetch category data',err)
     })
    })
    
    const add=()=>{
        axios.get(`http://localhost:8000/seller/getCategoryByName/${category}`).then((res)=>{
            console.log(res.data[0].idcategory)
            const id1=res.data[0].idcategory
          console.log(id1,"111111");
            
                axios.post(`http://localhost:8000/seller/createProduct`,
                {
                  namep:name,
                  descriptionp:description,
                  sizep:size,
                  quantityp:quantity,
                  pricep:price,
                  promop:promotion,
                  category_idcategory:id1
        
                }).then(()=>{
                    console.log("jjj")
                })
               .catch((err)=>{console.log("err",err)})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    
    return(
        <div>
           name:<input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" /><br/>
            description:<input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" /><br/>
            size:<input type="text" value={size} onChange={(e) => setSize(e.target.value)} placeholder="Size" /><br/>
            quantity:<input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" /><br/>
            price:<input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" /><br/>
            promotion<input type="number" value={promotion} onChange={(e) => setPromotion(e.target.value)} placeholder="Promotion" /><br/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            {AllCategory.map(oneCategory => (
                    <option>{oneCategory.name}</option>
                ))}
                </select> 
                <button onClick={()=>{add()}}>Add Product</button>
        </div>
    )

}

export default AddProduct