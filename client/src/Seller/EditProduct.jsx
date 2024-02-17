import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavSeller from './NavSeller'

const EditProduct = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productParam = queryParams.get('product')
    const product = JSON.parse(decodeURIComponent(productParam))
    const [getCategory, setGetCategory] = useState('')
    const [name, setName] = useState(product.namep);
    const [description, setDescription] = useState(product.description);
    const [size, setSize] = useState(product.sizep);
    const [quantity, setQuantity] = useState(product.quantityp);
    const [price, setPrice] = useState(product.pricep);
    const [promotion, setPromotion] = useState(product.promp);
    const [category, setCategory] = useState('Default Category');
    const [AllCategory, setAllCategory] = useState([]);
    
    const [images, setImages] = useState([]);




    console.log(product)
        ;
    useEffect(() => {
        axios.get("http://localhost:8000/admin/getAllCategory")
            .then((res) => {
                setAllCategory(res.data);
            })
            .catch((err) => {
                console.log("Error fetching category data", err);
            });
    }, []);

    const GetCategoryByname = () => {
        axios.get(`http://localhost:8000/seller/getCategoryById/${product.category_idcategory}`).then((res) => {
            setGetCategory(res.data)
            console.log(res.data)
        })
    }

    const editProduct = () => {
        axios.get(`http://localhost:8000/seller/getCategoryByName/${category}`).then((res) => {
            console.log(res.data[0].idcategory)
            const id1 = res.data[0].idcategory
            console.log(id1, "111111");

            axios.put(`http://localhost:8000/seller/updateProduct/${product.idproduct}`,
                {
                    
                    namep: name,
                    descriptionp: description,
                    sizep: size,
                    quantityp: quantity,
                    pricep: price,
                    promop: promotion,
                    category_idcategory: id1

                }).then(() => {
                    console.log('done')
                })
                .catch((err) => { console.log("err", err) })
        })
            .catch((err) => {
                console.log(err)
            })
    }


    const handleImageChange = (e) => {
        // Handle image change and setImages state
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="SignUp w-full bg-white">
    <NavSeller />
    <div className="Line3 w-full h-0 left-0 justify-center items-center inline-flex" style={{ marginTop: "5%" }}>
        <div className="Line3 w-full h-[0px] origin-top-left rotate-180 opacity-30 border border-black"></div>
    </div>
    <div className="Frame760 justify-around items-center flex " style={{ marginLeft: "5%" }}>
        {/* Form Fields */}
        <div className="Frame759 flex-col justify-start items-start gap-12 flex w-1/3">
            <div className="Frame753 flex-col justify-start items-start gap-6 flex">
                <div className="CreateAnAccount text-black text-4xl font-medium font-['Inter'] leading-[30px] tracking-wider">Update Product</div>
                <div className="EnterYourDetailsBelow text-black text-base font-normal font-['Poppins'] leading-normal">Enter your new data below</div>
            </div>
            <div className="Frame758 flex-col justify-start items-center gap-10 flex">
                <div className="Frame757 flex-col justify-start items-start gap-10 flex">
                    <div className="flex justify-between items-center gap-2">
                        <div className="flex flex-col justify-start items-start gap-2">
                            <input
                                type="text"
                                className="login__input"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                            <input
                                type="text"
                                className="login__input"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                            />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <input
                                type="password"
                                className="login__input"
                                placeholder="Size"
                                value={size}
                                onChange={(e) => { setSize(e.target.value) }}
                            />
                            <input
                                type="number"
                                className="login__input"
                                placeholder="Quantity"
                                value={quantity}
                                onChange={(e) => { setQuantity(e.target.value) }}
                            />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <input
                                type="number"
                                className="login__input"
                                placeholder="Price"
                                value={price}
                                onChange={(e) => { setPrice(e.target.value) }}
                            />
                            <input
                                type="number"
                                className="login__input"
                                placeholder="Promo"
                                value={promotion}
                                onChange={(e) => { setPromotion(e.target.value) }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal"></div>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="login__input select__input"
                            style={{
                                width: '100%',
                                padding: '0.5rem 1rem',
                                border: '1px solid #ccc',
                                borderRadius: '0.25rem',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.3s ease-in-out'
                            }}
                        >
                            <option value="">Category</option>
                            {AllCategory.map(oneCategory => (
                                <option key={oneCategory.id} value={oneCategory.name}>{oneCategory.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="Frame752 flex-col justify-start items-start gap-4 flex">
                    <button className="Button px-[122px] py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex"  onClick={() => { EditProduct(), window.location.reload() }} >
                        <div className="ViewAllProducts text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
                            Sumbit
                        </div>
                    </button>
                </div>
            </div>
        </div>
        {/* Image Slider */}
        <div className="w-2/3 p-4">
            {/* Add your image slider component here */}
        </div>
    </div>
</div>

        
       
                    
    )
};

export default EditProduct;




