// import React from 'react'
// import { Link } from 'react-router-dom'
// import './ProdNav.css'   // <-- your CSS styles go here

// const ProdNav = () => {
//   return (
//     <div className="navbar">
//       <div className="dropdown">
//         <button className="dropbtn">
//           Product <i className="fa fa-caret-down"></i>
//         </button>
//         <div className="dropdown-content">
//           <Link to="/addpro">Add</Link>
//           <Link to="/prodView">View</Link>
//         </div>
//       </div>
//       <Link to="/orders">Orders</Link>
//     </div>
//   )
// }

// export default ProdNav



import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProdNav.css'

const ProdNav = () => {
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => {
    setOpen(!open)
  }

  return (
    <div className="navbar">
      
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          Product ▼
        </button>

        {open && (
          <div className="dropdown-content">
            <Link to="/addpro" onClick={() => setOpen(false)}>Add</Link>
            <Link to="/prodView" onClick={() => setOpen(false)}>View</Link>
          </div>
        )}
      </div>

      <Link to="/orders">Orders</Link>

    </div>
  )
}

export default ProdNav
