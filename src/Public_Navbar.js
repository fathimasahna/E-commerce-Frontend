import React from 'react'
import p1 from './Public_navbar.module.css'
const Public_Navbar = () => {
  return (
    <div className={p1.nav}>
      <h4>Public Navbar</h4>
     <div className={p1.links}>
      <a href='/login'>Login</a>
      <a href='/cusReg'>Customer Registration</a>
      <a href='/prodCust'>Reviews</a>
     </div>  
    </div>
  )
}

export default Public_Navbar
