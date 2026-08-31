import React from 'react'
import './AdminShopAdd.css'
import axios from 'axios'
 import  { useState } from 'react'
import Navbar from './Navbar'
 import { useNavigate } from 'react-router-dom';
const AdminShopAdd = () => {
    const[addShop,setAddshop]=useState({})
    const navigate=useNavigate()

     const handlechange=(e)=>{
        const n1=e.target.name;
        const n2=e.target.value;
        setAddshop(addShop=>({...addShop,[n1]:n2}))
    }

    const loginSubmit=(e)=>{
      e.preventDefault()
         axios
        .post("https://e-commerce-application-fdjs.onrender.com/sample/shopInsert/",addShop)
         .then((response)=>{
        navigate("/");
    });
    } 
  return (
 <div className='shop'>
  <Navbar/>
    <div className="form-container">
      <h2>Add Shop Details</h2>
      <form className="shop-form">
        <label>Shop Name</label>
        <input type="text" placeholder="Enter shop name" onChange={handlechange} name='name' value={addShop.name}/>

        <label>Address</label>
        <input type="text" placeholder="Enter address" onChange={handlechange} name='address' value={addShop.address}/>

        <label>Pincode</label>
        <input type="text" placeholder="Enter pincode" onChange={handlechange} name='pincode' value={addShop.pincode}/>

        <label>Phone</label>
        <input type="text" placeholder="Enter phone number" onChange={handlechange} name='phone' value={addShop.phone}/>

        <label>Email</label>
        <input type="email" placeholder="Enter email" onChange={handlechange} name='email' value={addShop.email}/>

        <button type="submit" className="btn-submit" onClick={loginSubmit}>Submit</button>
      </form>
    </div>
  </div>  
  );
};

export default AdminShopAdd;

  


