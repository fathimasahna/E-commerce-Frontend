
import React from "react";
import { Route, Routes } from "react-router-dom";

import Add from "./Add";
import View from "./View";
import Update from "./Update";

import ProdForm from "./ProdForm";
import ProdTable from "./ProdTable";
import ProdUpdate from "./ProdUpdate";

import Customer_Nav from "./Customer_Nav";
import Customer_view from "./Customer_view";
import Customer_cart from "./Customer_cart";
import Customer_order from "./Customer_order";
import CustomerReg from "./CustomerReg";
import Customer_Complaint from "./Customer_Complaint";
import CustomerViewdp from "./CustomerViewdp";
import Customer_review from "./Customer_review";

import Navbar_ReviewProd from "./Navbar_ReviewProd";
import Navbar_Review from "./Navbar_Review";
import NavbarViewReview from "./NavbarViewReview";

import Public_login from "./Public_login";
import CustomerRegistrationForm from "./CustomerRegistrationForm";
import CustomerRegistrationTable from "./CustomerRegistrationTable";

import AdminShopAdd from "./AdminShopAdd";
import AdminShopView from "./AdminShopView";
import AdminHomePage from "./AdminHomePage";

import CustomerHomePage from "./CustomerHomePage";
import ShopHome from "./ShopHome";

import Login from "./Login";
import PublicHome from "./PublicHome";
import PublicRev from "./PublicRev";
import PublicViewReview from "./PublicViewReview";
import ProdOrder from "./ProdOrder";

const App = () => {
  return (
    <div>
      <Routes>

        {/* ================= ADMIN ================= */}

        <Route path="/" element={<AdminHomePage />} />

        <Route path="/add" element={<Add />} />
        <Route path="/view" element={<View />} />
        <Route path="/formupdate" element={<Update />} />

        <Route path="/admin_home" element={<AdminHomePage />} />
        <Route path="/adminlogin" element={<Login />} />

        {/* Product Management */}
        <Route path="/addpro" element={<ProdForm />} />
        <Route path="/prodView" element={<ProdTable />} />
        <Route path="/formUpd" element={<ProdUpdate />} />

        {/* Shop Management */}
        <Route path="/shop" element={<ShopHome />} />
        <Route path="/shopadd" element={<AdminShopAdd />} />
        <Route path="/shopview" element={<AdminShopView />} />

        {/* Admin Review */}
        <Route path="/adminreview" element={<Navbar_Review />} />
        <Route path="/reviewTable" element={<NavbarViewReview />} />


        {/* ================= CUSTOMER ================= */}

        <Route path="/customer" element={<Customer_Nav />} />
        <Route path="/customer_home" element={<CustomerHomePage />} />

        <Route path="/products" element={<Customer_view />} />
        <Route path="/carts" element={<Customer_cart />} />

        <Route path="/orders" element={<ProdOrder />} />
        <Route path="/custOrder" element={<Customer_order />} />

        <Route path="/regOrder" element={<CustomerReg />} />

        {/* Complaints */}
        <Route path="/giveComplaint" element={<Customer_Complaint />} />
        <Route path="/viewComplaint" element={<CustomerViewdp />} />

        {/* Reviews */}
        <Route path="/review" element={<Customer_review />} />
        <Route path="/reviewtextarea" element={<Navbar_ReviewProd />} />
        <Route path="/reviewsubmit" element={<Navbar_Review />} />


        {/* ================= PUBLIC ================= */}

        <Route path="/public" element={<PublicHome />} />
        <Route path="/login" element={<Public_login />} />

        {/* Customer Registration */}
        <Route path="/cusReg" element={<CustomerRegistrationForm />} />
        <Route path="/cusTable" element={<CustomerRegistrationTable />} />

        {/* Public Products */}
        <Route path="/prodCust" element={<PublicRev />} />

        {/* Public Product Reviews */}
        <Route
          path="/publicViewReview"
          element={<PublicViewReview />}
        />

      </Routes>
    </div>
  );
};

export default App;

