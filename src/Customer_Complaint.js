// import axios from 'axios';
// import React from 'react'

// import { useState } from 'react'
// const Customer_Complaint = () => {
// const[complaint,setComplaint]=useState("");

// const submitComplaint = () => {
//   axios
//     .post("https://e-commerce-application-fdjs.onrender.com/sample/addComplaint/",{
//       order_id: order_id,
//       complaint: complaint,
//     })
//     .then((res)=>{
//       alert("complaint submitted");
//       console.log(res.data);
//     })
//     .catch((err)=>{
//       console.log(err);
//     })

//   return (
//     <div>
//       <h2>Give Complaint</h2>
//       <h4>Complaint:</h4>

//       <textarea rows={20} cols={80} onChange={(e)=>setComplaint(e.target.value)}></textarea  ><br></br>
//      <button onClick={submitComplaint}>Submit</button>
//     </div>
//   )
// }
// }

// export default Customer_Complaint

import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Customer_Nav from './Customer_Nav';
import c1 from './Customer_Complaint.module.css'
const Customer_Complaint = () => {
  const [complaint, setComplaint] = useState("");
  const location = useLocation();

  const order_id = location.state?.orderId;

  const submitComplaint = () => {
    axios
      .post("https://e-commerce-application-fdjs.onrender.com/sample/addComplaint/", {
        order_id: order_id,
        complaint: complaint,
      })
      .then((res) => {
        alert("Complaint submitted");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={c1.outer}>
       <Customer_Nav/>
        <h2>Give Complaint</h2>
      <div className={c1.inner}>  
       

        <textarea
        placeholder='Enter your complaints'
          rows={10}
          cols={50}
          onChange={(e) => setComplaint(e.target.value)}
        ></textarea>
        <br />

        <button onClick={submitComplaint} className={c1.Cbttn}>Submit</button>
      </div>
    </div>
  );
};

export default Customer_Complaint;

