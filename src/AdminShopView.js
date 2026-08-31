import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './AdminShopView.css'
import Navbar from './Navbar'
const AdminShopView = () => {
    const[view,setView]=useState([])
    useEffect(()=>{
        axios
        .get("https://e-commerce-application-fdjs.onrender.com/sample/shopView/")
        .then((response)=>setView(response.data))
    })
        
    
  return (
    <div>
        <Navbar/>
      <table border={1}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Shop Name</th>
                <th>Address</th>
                <th>Phone No</th>
                <th>Pin Code</th>
                <th>Email</th>

            </tr>
        </thead>
        <tbody>
           {view.map((item)=>(
            <tr key={item.shopId}>
                <td> {item.shopId} </td>
                <td> {item.name} </td>
                <td>{item.address} </td>
                <td>{item.phone} </td>
                <td>{item.pincode} </td>
                <td>{item.email} </td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminShopView
