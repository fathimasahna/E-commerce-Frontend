import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cust from './CustomerRegistrationForm.module.css'
import Public_Navbar from './Public_Navbar'
const CustomerRegistrationForm = () => {
    const navigate = useNavigate()
    const [customer, setCustomer] = useState({
        name: "",
        phoneNo: "",
        email: "",
        address: ""
    })
    const show = (e) => {
        const { name, value } = e.target;
        setCustomer(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("https://e-commerce-application-fdjs.onrender.com/sample/CustomerInsert/", customer)
            .then((res) => {
            navigate("/cusTable");
            })
            .catch((err) => console.log(err));
    };

    return (
<>   
<Public_Navbar/> 
  <div className={cust.wrapper}>
   
    <form onSubmit={handleSubmit} className={cust.registrationForm}>
      <input
        type="text"
        placeholder="Customer Name"
        name="name"
        value={customer.name}
        onChange={show}
        className={cust.nameInput}
      /><br />

      <input
        type="number"
        placeholder="Phone No"
        name="phoneNo"
        value={customer.phoneNo}
        onChange={show}
        className={cust.phoneInput}
      /><br />

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={customer.email}
        onChange={show}
        className={cust.emailInput}
      /><br />

      <input
        type="text"
        placeholder="Address"
        name="address"
        value={customer.address}
        onChange={show}
        className={cust.addressInput}
      /><br />

      <button type="submit" className={cust.submitButton}>Submit</button>
    </form>
  </div>
</>  
);

}

export default CustomerRegistrationForm
