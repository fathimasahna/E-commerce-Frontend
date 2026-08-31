import React from "react";
import "./CustomerHomePage.css";
import Customer_Nav from "./Customer_Nav";
import { useNavigate } from "react-router-dom";
const CustomerHomePage = () => {
  const navigate =useNavigate()
  return (
    <div className="customerPage">

      {/* Navbar */}
      <div className="customerNavbar">
        <Customer_Nav />
      </div>

      {/* Hero Section */}
      <main className="customerhome_outer">

        <div className="customerHeroContent">

          <p className="customerLabel">
            WELCOME TO OUR STORE
          </p>

          <h1 className="customerH1">
            Everything You Need,
            <span> All in One Place.</span>
          </h1>

          <p className="customerHeroText">
            Discover products you'll love, explore our collection,
            and enjoy a simple and convenient shopping experience.
          </p>

          <div className="customerHeroButtons">
            <button className="customerPrimaryBtn">
              Shop Now
            </button>

            <button  className="customerSecondaryBtn" onClick={()=> navigate('/products')}>
              Explore Products
            </button>
          </div>

        </div>

        {/* Decorative shopping card */}
        <div className="customerHeroVisual">

          <div className="customerProductCard">

            <div className="customerCardImage">
              <span>NEW</span>
            </div>

            <div className="customerCardDetails">
              <p>FEATURED COLLECTION</p>

              <h3>Discover Something New</h3>

              <div className="customerCardBottom " >
                <button >Shop Collection</button>
                <span>→</span>
              </div>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default CustomerHomePage;