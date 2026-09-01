import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 import './ProdForm.css'
import ProdNav from './ProdNav';
const ProdForm = () => {
    const navigate = useNavigate(); 
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        stock: "",
        category: ""
    });
  useEffect(() => {
  axios.get("https://e-commerce-application-fdjs.onrender.com/sample/categoryGet/")
    .then((res) => {
      console.log("API response:", res.data);
      setCategories(res.data);
    })
    .catch((err) => console.log(err));
}, []);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("https://e-commerce-application-fdjs.onrender.com/sample/productInsert/", formData)
            .then((res) => {
                navigate("/shop");
            })
            .catch((err) => console.log(err));
    };

    return (

      <><ProdNav/>
        <div className='form-outer'>
            <form className='forms' onSubmit={handleSubmit}>
                <h2 className='form-h2'>Add product</h2>

                <input
                    type='text'
                    name='name'
                    placeholder='Product Name'
                    value={formData.name}
                    onChange={handleChange}
                />

                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>
                    ))}
                </select>
                <input
                    type='number'
                    name='price'
                    placeholder='Price'
                    value={formData.price}
                    onChange={handleChange}
                />

                <input
                    type='number'
                    name='stock'
                    placeholder='Stock'
                    value={formData.stock}
                    onChange={handleChange}
                />

                <button type='submit'>ADD</button>
            </form>
        </div>
     </>  
    );
};

export default ProdForm;
