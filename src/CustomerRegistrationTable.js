import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerRegistrationTable = () => {

  const [table, setTable] = useState([]);

  useEffect(() => {
    axios
      .get("https://e-commerce-application-fdjs.onrender.com/sample/CustomerGet/")
      .then((response) => {
        console.log("Customer data:", response.data);
        setTable(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customers:", error);
      });

  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer NAME</th>
            <th>Phone no</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {table.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phoneNo}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default CustomerRegistrationTable;