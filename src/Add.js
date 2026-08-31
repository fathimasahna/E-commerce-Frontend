import React, { useState } from 'react'
import './Add.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
const Add = () => {
    const navigate=useNavigate()
    const [category,setCategory]=useState({name:'',description:''})

    const handlechange=(e)=>{
        const n1=e.target.name;
        const n2=e.target.value;
        setCategory(category=>({...category,[n1]:n2}))
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        axios
        .post("https://e-commerce-application-fdjs.onrender.com/sample/categoryInsert/",category)
         .then((response)=>{
        navigate("/");
    });
    }
  return (
  <div>  
    <Navbar/>
   <div className='outerAdmin'>
    
    <div>
      
      <form className='formsAdmin'>
        <h2 className='add-h2'>Add Category</h2>
        <input type='text' placeholder='name' name='name' value={category.name} onChange={handlechange} className='add-boxs'></input><br></br>
        <input type='text' placeholder='Description' name='description' value={category.description} onChange={handlechange} className='add-boxs'></input><br></br>
        <button onClick={handlesubmit} className='btnsAdmin'>ADD</button>
       
      </form>
    </div>
   </div>  
  </div> 
  )
}

export default Add
