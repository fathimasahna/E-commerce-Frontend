
import React from "react";
import "./AdminHomePage.css";
import Navbar from "./Navbar";

const AdminHomePage = () => {
  return (
    <div className="adminHome">

      {/* Navbar - unchanged */}
      <div className="homeNavbar">
        <Navbar />
      </div>

      {/* Hero Section */}
      <main className="adminHero">

        <div className="heroOverlay"></div>

        <div className="heroContent">

          <div className="heroText">

            <p className="heroEyebrow">
              ECOMMERCE MANAGEMENT
            </p>

            <h1 className="homeH1">
              Smart Management
              <span> Starts Here.</span>
            </h1>

            <p className="homeP">
              Welcome to your eCommerce command center. Manage your
              categories, products, shops, customer interactions and
              business operations from one powerful workspace.
            </p>

            <div className="heroFeatures">
              <div className="heroFeature">
                <strong>01</strong>
                <span>Manage Products</span>
              </div>

              <div className="heroFeature">
                <strong>02</strong>
                <span>Track Customers</span>
              </div>

              <div className="heroFeature">
                <strong>03</strong>
                <span>Control Operations</span>
              </div>
               <div className="heroFeature">
                <strong>04</strong>
                <span>Overview Complaints</span>
              </div>
            </div>

          </div>

          {/* Decorative dashboard card */}
          <div className="heroCard">

            <div className="cardTop">
              <span>ADMIN PANEL</span>

              <div className="statusDot"></div>
            </div>

            <div className="cardLine"></div>

            <div className="cardStats">

              <div className="statBox">
                <span>PRODUCTS</span>
                <strong>Manage</strong>
              </div>

              <div className="statBox">
                <span>CUSTOMERS</span>
                <strong>Connect</strong>
              </div>

              <div className="statBox">
                <span>ORDERS</span>
                <strong>Control</strong>
              </div>

              <div className="statBox">
                <span>REVIEWS</span>
                <strong>Monitor</strong>
              </div>

            </div>

            <div className="cardFooter">
              <span>Everything in one place</span>
              <span>→</span>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default AdminHomePage;

