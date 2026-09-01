import React from 'react'
import { Link } from 'react-router-dom'
import p1 from './Public_navbar.module.css'

const Public_Navbar = () => {
  return (
    <nav className={p1.nav}>

      {/* Logo / Brand */}
      <Link to="/" className={p1.logo}>
        <span>ELORA</span>
        <small>SHOP</small>
      </Link>

      {/* Navigation Links */}
      <div className={p1.links}>

        <Link to="/" className={p1.active}>
          Home
        </Link>

        <Link to="/prodCust">
          View Products
        </Link>


        <Link to="/cusReg">
          Customer Registration
        </Link>

        <Link to="/login" className={p1.loginBtn}>
          Login
        </Link>

      </div>

    </nav>
  )
}

export default Public_Navbar