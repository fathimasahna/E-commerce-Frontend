import styles from "./Customer_Nav.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Customer_Nav = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [complaintOpen, setComplaintOpen] = useState(false);

  const customerBtn = () => {
    navigate("/public");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.outer}>

      {/* Logo / Brand */}
      <div className={styles.brand}>
        <h2>Customer</h2>
      </div>


      {/* Hamburger */}
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
        className={`${styles.navigation} ${
          menuOpen ? styles.navigationOpen : ""
        }`}
      >

        <div className={styles.links}>

          <Link to="/products" onClick={closeMenu}>
            View Products
          </Link>

          <Link to="/carts" onClick={closeMenu}>
            Cart
          </Link>

          <Link to="/custOrder" onClick={closeMenu}>
            Orders
          </Link>

          <Link to="/review" onClick={closeMenu}>
            Reviews
          </Link>


          {/* Complaint Dropdown */}
          <div className={styles.dropdown}>

            <button
              className={styles.dropbtn}
              onClick={() => setComplaintOpen(!complaintOpen)}
            >
              Complaint
              <span className={styles.arrow}>
                {complaintOpen ? "▲" : "▼"}
              </span>
            </button>


            {complaintOpen && (
              <div className={styles.dropdownContent}>

                <Link
                  to="/regOrder"
                  onClick={closeMenu}
                >
                  Register Complaint
                </Link>

              </div>
            )}

          </div>

        </div>


        {/* Logout */}
        <button
          className={styles.cusBtn}
          onClick={customerBtn}
        >
          Logout
        </button>

      </div>

    </nav>
  );
};

export default Customer_Nav;