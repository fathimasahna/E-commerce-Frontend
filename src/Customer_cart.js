
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Customer_Nav from "./Customer_Nav";
import styles from "./Customer_cart.module.css";

const Customer_cart = () => {
  const [carts, setCarts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://e-commerce-application-fdjs.onrender.com/sample/cartGet")
      .then((res) => setCarts(res.data.carts))
      .catch((err) => console.log(err));
  }, []);

  const pay = () => {
    axios
      .post("https://e-commerce-application-fdjs.onrender.com/sample/orderInsert")
      .then((res) => {
        alert("Order placed successfully!");
        console.log(res.data);
        navigate("/customer");
      })
      .catch((err) => console.log(err));
  };

  const subtotal = carts.reduce(
    (total, cart) =>
      total + Number(cart.price) * Number(cart.quantity),
    0
  );

  return (
    <>
      <Customer_Nav />

      <div className={styles.cartPage}>

        <h1 className={styles.heading}>Shopping Cart</h1>

        <div className={styles.cartLayout}>

          {/* LEFT SIDE - CART ITEMS */}
          <div className={styles.cartSection}>

            <div className={styles.cartHeader}>
              <h2>Your Cart</h2>
              <span>{carts.length} Items</span>
            </div>

            {carts.length === 0 ? (
              <div className={styles.emptyCart}>
                <h3>Your cart is empty</h3>
                <p>Add some products to your cart to continue shopping.</p>

                <button
                  onClick={() => navigate("/products")}
                  className={styles.shopButton}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              carts.map((cart) => (
                <div key={cart.id} className={styles.cartItem}>

                  <div className={styles.productImage}>
                    Product
                  </div>

                  <div className={styles.productDetails}>
                    <h3>{cart.name}</h3>
                    <p className={styles.productPrice}>
                      ₹{cart.price}
                    </p>
                  </div>

                  <div className={styles.quantity}>
                    <span>Quantity</span>
                    <strong>{cart.quantity}</strong>
                  </div>

                  <div className={styles.itemTotal}>
                    <span>Total</span>
                    <strong>
                      ₹{Number(cart.price) * Number(cart.quantity)}
                    </strong>
                  </div>

                </div>
              ))
            )}

          </div>

          {/* RIGHT SIDE - ORDER SUMMARY */}
          {carts.length > 0 && (
            <div className={styles.summaryCard}>

              <h2>Order Summary</h2>

              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Delivery</span>
                <span className={styles.free}>FREE</span>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.totalRow}>
                <span>Total</span>
                <strong>₹{subtotal}</strong>
              </div>

              <button
                onClick={pay}
                className={styles.payBtn}
              >
                Proceed To Pay
              </button>

              <button
                onClick={() => navigate("/products")}
                className={styles.continueButton}
              >
                Continue Shopping
              </button>

            </div>
          )}

        </div>

      </div>
    </>
  );
};

export default Customer_cart;

