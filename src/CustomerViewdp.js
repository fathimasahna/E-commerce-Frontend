import React, { useState, useEffect } from 'react';
import axios from 'axios';
import d1 from './CustomerViewdp.module.css'
import Navbar from './Navbar'
const CustomerViewdp = () => {
  const [orders, setOrders] = useState([]);
useEffect(() => {
  axios.get("https://e-commerce-application-fdjs.onrender.com/sample/complaintGet")
    .then((response) => {
      console.log(response.data);
      setOrders(response.data);
    })
    .catch((error) => console.error(error));
}, []);


  return (
  <div>
<Navbar/>
    <div className={d1.outer}>
        
      <table border={1} className={d1.table}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Complaint</th>
            <th>Complaint Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <tr key={item.complaint_id}>
              <td>{item.product_name}</td>
              <td>{item.complaints}</td>
              <td>{item.complaint_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>   
  );
};

export default CustomerViewdp;