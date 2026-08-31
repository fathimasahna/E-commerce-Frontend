import React from 'react'
 import './View.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
const View = () => {
    const [views, setViews] = useState([])
   const navigate=useNavigate()
    useEffect(() => {
        axios
            .get("https://e-commerce-application-fdjs.onrender.com/sample/categoryGet")
            .then((response) => setViews(response.data));
    }, [])

    const del=(id)=>{
    //     axios
    //     .delete(`https://e-commerce-application-fdjs.onrender.com/sample/categoryDel/${id}`)
    //    .then(function(response){
    //     window.location.reload();
    //    })

    axios.delete(`https://e-commerce-application-fdjs.onrender.com/sample/categoryDel/${id}/`)
  .then(() => {
    setViews((prev) => prev.filter((item) => item.id !== id));
  })
  .catch((error) => {
    console.error("Delete failed:", error);
    alert("Could not delete item");
  });

        
    }

   

    const edit=(s1)=>{
        axios
        .get(`https://e-commerce-application-fdjs.onrender.com/sample/categoryUpdateView/${s1}/`)
        .then((response) => {
      console.log("Data:", response.data);
      navigate("/formupdate", { state: response.data });
    })
    }
   
    return (

       <div className="view-products-container">
        <Navbar/>
      <h2 className='h2-container'>View Products</h2>
      <table className="products-table" border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
           
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {views.map((item) => (
            
            <tr>
              <td>{item.id}  </td>  
              <td> {item.name} </td>
             
              <td> {item.description}</td>
             <td><button onClick={() => del(item.id)} className='View-edbttn'>Delete</button></td>
             <td><button onClick={() => edit(item.id)} className='View-delbttn'>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    )
}

export default View
