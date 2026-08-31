import React, { useState, useEffect } from 'react'
import u1 from './Update.module.css'

import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Update = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        id: location.state[0].id,
        name: location.state[0].name,

        description: location.state[0].description,
    });

    //update a product if locationn.state changes

    useEffect(() => {
        if (location.state) {
            setProduct(location.state);
        }
    }, [location.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post(`https://e-commerce-application-fdjs.onrender.com/sample/categoryEdit/` + location.state[0].id + "/", product,)
            .then((response) => {
                navigate("/view");
            });
    }
    return (
        <div className={u1.page}>
            <div className={u1.tab}>
                <form onSubmit={handleSubmit}>
                    <h2 className={u1.h2}>Update Form</h2>
                    <input type='text' placeholder='name' name='name' value={product.name} onChange={handleChange} className={u1.updateBox}></input><br></br>

                    <input type='text' placeholder='description' name='description' value={product.description} onChange={handleChange} className={u1.updateBox}></input><br></br>
                    <button onClick={handleSubmit} className={u1.updateBtn}>Update Product</button>
                </form>
            </div>
        </div>
    )
}

export default Update


