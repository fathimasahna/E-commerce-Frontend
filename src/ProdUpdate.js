import React, { useState, useEffect } from 'react';
import p from './ProdUpdate.module.css'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProdUpdate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    id: location.state.id,
    name: location.state.name,
    price: location.state.price,
    stock: location.state.stock
   
  });

  useEffect(() => {
    if (location.state) {
    setProduct(location.state);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post(`https://e-commerce-application-fdjs.onrender.com/sample/productEdit/` + location.state[0].id + "/", product,)
            .then((response) => {
                navigate("/prodView");
            });
    }

  return (
    <div className={p.outt}>
      <div className={p.table}>
        <form onSubmit={handleSubmit}>
          <h2>Update Form</h2>
          <input type='text' placeholder='name' name='name' value={product.name} onChange={handleChange} className={p.boxs} /><br />
          <input type='text' placeholder='price' name='price' value={product.price} onChange={handleChange} className={p.boxs} /><br />
          <input type='text' placeholder='stock' name='stock' value={product.stock} onChange={handleChange} className={p.boxs} /><br />
          <button type='submit' className={p.button}>Update Product</button>
        </form>
      </div>
    </div>
  );
};

export default ProdUpdate;
