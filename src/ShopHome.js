import React from "react";
import ProdNav from "./ProdNav";
import "./ShopHome.css";

const ShopHome = () => {
  return (
    <div className="shopPage">

      {/* Navbar */}
      <div className="ShopNavbar">
        <ProdNav />
      </div>

      {/* Hero Section */}
      <main className="shop_outer">

        <div className="shop_overlay"></div>

        <div className="shop_content">

          <p className="shop_label">
            E-COMMERCE MANAGEMENT
          </p>

          <h1>
            Manage Your
            <span> Shop Smarter.</span>
          </h1>

          <p className="shop_description">
            Keep your store organized and your business running smoothly.
            Manage shops, products and inventory from one place.
          </p>

         

        </div>

        {/* Decorative card */}
        <div className="shop_visual">

          <div className="shop_card">

            <div className="shop_card_top">
              <span>SHOP MANAGEMENT</span>
              <span className="shop_dot"></span>
            </div>

            <h3>Your Store</h3>

            <div className="shop_stats">

              <div>
                <strong>24</strong>
                <small>Products</small>
              </div>

              <div>
                <strong>08</strong>
                <small>Orders</small>
              </div>

              <div>
                <strong>12</strong>
                <small>Categories</small>
              </div>

            </div>

            <div className="shop_progress">
              <span></span>
            </div>

            <p>Store performance overview</p>

          </div>

        </div>

      </main>

    </div>
  );
};

export default ShopHome;