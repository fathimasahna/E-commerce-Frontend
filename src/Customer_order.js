import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Customer_order.css'
import Customer_Nav from './Customer_Nav'
const Customer_order = () => {
  const [order, setOrder] = useState([])

  useEffect(() => {
    axios
      .get("https://e-commerce-application-fdjs.onrender.com/sample/orderGet")
      .then((response) => setOrder(response.data))
  }, [])

 
  return (
    <div>
      <Customer_Nav/>
      <table className='table' border={1} >
        <thead className='head'>
          <tr>
            <th>Order_Id</th>
            <th>Quantity</th>
            <th>Order_date</th>
            <th>Status</th>
            <th>Product_Id</th>
          </tr>
        </thead>
        <tbody className='body'>
          {order.map((item) => (
            <tr key={item.orderid}>
              <td>{item.orderid}</td>
              <td>{item.quantity}</td>
              <td>{item.order_date}</td>
              <td>{item.status}</td>
              <td>{item.product_id}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Customer_order