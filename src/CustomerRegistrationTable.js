import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
const CustomerRegistrationTable = () => {
    const[table,setTable]=useState({})
     useEffect(() => {
    axios
      .get("https://e-commerce-application-fdjs.onrender.com/sample/CustomerGet/")
      .then((response) => setTable(response.data));
       
  }, [])
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Customer NAME</th>
                <th>Phone no</th>
                <th>email</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
          {table.map((item) => (
            <tr key={item.shopId}>
              <td>{item.name}</td>
              <td>{item.phoneNo}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>

              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerRegistrationTable
