import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

const ProdNav = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
    setShopOpen(false);
  };

  const toggleShop = () => {
    setShopOpen(!shopOpen);
    setCategoryOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setCategoryOpen(false);
    setShopOpen(false);
  };

  const handleLogout = () => {
    closeMenu();
    navigate("/public");
  };

  return (
    <nav className={styles.navbar}>

      {/* Admin Logo */}
      <div className={styles.admin}>
        <SupervisorAccountIcon className={styles.adminIcon} />
        <h1>Admin</h1>
      </div>

      {/* Hamburger Button */}
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <div
        className={`${styles.main} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >

        {/* Category */}
        <div className={styles.dropdown}>

          <button
            className={styles.dropbtn}
            onClick={toggleCategory}
          >
            Category
            <span className={styles.arrow}>
              {categoryOpen ? "▲" : "▼"}
            </span>
          </button>

          {categoryOpen && (
            <div className={styles.dropdownContent}>

              <Link to="/add" onClick={closeMenu}>
                Add Category
              </Link>

              <Link to="/view" onClick={closeMenu}>
                View Category
              </Link>

            </div>
          )}
        </div>

        {/* Complaints */}
        <Link
          className={styles.navLink}
          to="/viewComplaint"
          onClick={closeMenu}
        >
          Complaints
        </Link>
         <Link
          className={styles.navLink}
          to="/cusTable"
          onClick={closeMenu}
        >
          View Customers
        </Link>

        {/* Review */}
        <Link
          className={styles.navLink}
          to="/reviewsubmit"
          onClick={closeMenu}
        >
          Review
        </Link>

        {/* Shop */}
        <div className={styles.dropdown}>

          <button
            className={styles.dropbtn}
            onClick={toggleShop}
          >
            Shop
            <span className={styles.arrow}>
              {shopOpen ? "▲" : "▼"}
            </span>
          </button>

          {shopOpen && (
            <div className={styles.dropdownContent}>

              <Link to="/shopadd" onClick={closeMenu}>
                Add Shop
              </Link>

              <Link to="/shopview" onClick={closeMenu}>
                View Shop
              </Link>

            </div>
          )}

        </div>

        {/* Logout */}
        <button
          className={styles.btn}
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>
    </nav>
  );
};

export default ProdNav;